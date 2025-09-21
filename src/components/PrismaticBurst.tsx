import React, { CSSProperties, useEffect, useMemo, useRef } from 'react';
import { Renderer, Camera, Program, Mesh, Triangle } from 'ogl';

export type AnimationType = 'rotate' | 'rotate3d' | 'pulse';

export interface PrismaticBurstProps {
  animationType?: AnimationType;
  intensity?: number; // overall alpha
  speed?: number; // animation speed multiplier
  distort?: number; // wave distortion amount
  paused?: boolean;
  offset?: { x: number; y: number }; // from center in px
  hoverDampness?: number; // 0..1 lower is more snappy
  rayCount?: number; // how many rays around the circle
  mixBlendMode?: CSSProperties['mixBlendMode'];
  colors?: string[]; // hex colors
  className?: string;
}

function hexToRgb(hex: string) {
  const h = hex.replace('#', '');
  const bigint = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r / 255, g / 255, b / 255];
}

const defaultColors = ['#ff007a', '#4d3dff', '#ffffff'];

const vert = /* glsl */ `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const frag = /* glsl */ `
  precision highp float;
  varying vec2 vUv;

  uniform vec2 uResolution; // px
  uniform float uTime;
  uniform float uSpeed;
  uniform float uIntensity;
  uniform float uDistort;
  uniform vec2 uOffset; // px
  uniform float uRayCount;
  uniform int uAnimMode; // 0 rotate, 1 rotate3d, 2 pulse
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;

  // Simple hash noise
  float hash(float n){ return fract(sin(n)*43758.5453123); }
  float noise(in vec2 x){
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0;
    float res = mix(mix(hash(n+0.0), hash(n+1.0), f.x), mix(hash(n+57.0), hash(n+58.0), f.x), f.y);
    return res;
  }

  vec3 palette(float t) {
    // Cosine palette between three colors
    vec3 a = uColorA;
    vec3 b = uColorB;
    vec3 c = uColorC;
    float m = smoothstep(0.0, 1.0, t);
    vec3 ab = mix(a, b, m);
    vec3 bc = mix(b, c, m);
    return mix(ab, bc, m);
  }

  void main() {
    // Normalize coords to [-1, 1] with center at 0
    vec2 res = uResolution;
    vec2 uv = vUv * res;
    vec2 center = 0.5 * res + uOffset;
    vec2 p = (uv - center) / min(res.x, res.y);

    // Polar coordinates
    float r = length(p);
    float a = atan(p.y, p.x);

    // Animation
    float t = uTime * uSpeed;
    if (uAnimMode == 0) {
      a += t * 0.6; // rotate
    } else if (uAnimMode == 1) {
      a += t * (0.6 + 0.2 * sin(t*0.7));
      r += 0.05 * sin(t*0.9); // subtle 3d wobble
    } else {
      r += 0.1 * sin(t*2.0); // pulse radius
    }

    // Distortion using simple procedural noise
    float n = noise(vec2(a * uRayCount * 0.5, r * 6.0 + t));
    a += (n - 0.5) * 0.3 * uDistort;

    // Create radial rays by thresholding the angle periodic function
    float rays = cos(a * uRayCount);
    rays = abs(rays);
    rays = pow(rays, 8.0 - 6.0 * clamp(uDistort, 0.0, 1.0)); // sharpen rays, less sharp if heavily distorted

    // Fade with radius and add noise variation
    float vignette = smoothstep(1.2, 0.2, r);
    float brightness = rays * vignette;
    brightness *= 0.8 + 0.2 * noise(uv * 0.01 + t);

    // Color blend over angle for variety
    float hueT = fract((a / 6.28318) + 0.5 + 0.1 * sin(t));
    vec3 col = palette(hueT);

    vec3 outCol = col * brightness;

    gl_FragColor = vec4(outCol, uIntensity * brightness);
  }
`;

export default function PrismaticBurst({
  animationType = 'rotate3d',
  intensity = 0.9,
  speed = 0.5,
  distort = 1.0,
  paused = false,
  offset = { x: 0, y: 0 },
  hoverDampness = 0.25,
  rayCount = 24,
  mixBlendMode = 'lighten',
  colors = defaultColors,
  className,
}: PrismaticBurstProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const programRef = useRef<Program | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetOffsetRef = useRef({ x: offset.x, y: offset.y });

  const colorVecs = useMemo(() => {
    const [a, b, c] = [colors[0] || defaultColors[0], colors[1] || defaultColors[1], colors[2] || defaultColors[2]];
    return [hexToRgb(a), hexToRgb(b), hexToRgb(c)];
  }, [colors]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Init renderer
    const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), alpha: true, antialias: true, premultipliedAlpha: true });
    const gl = renderer.gl;
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.display = 'block';
    gl.canvas.style.position = 'absolute';
    gl.canvas.style.inset = '0';
    (gl.canvas.style as any).mixBlendMode = mixBlendMode as any;
    (gl.canvas.style as any).pointerEvents = 'none';

    el.appendChild(gl.canvas);

    const camera = new Camera(gl);
    camera.position.z = 1;

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vert,
      fragment: frag,
      uniforms: {
        uResolution: { value: [el.clientWidth, el.clientHeight] },
        uTime: { value: 0 },
        uSpeed: { value: speed },
        uIntensity: { value: intensity },
        uDistort: { value: distort },
        uOffset: { value: [offset.x, offset.y] },
        uRayCount: { value: rayCount },
        uAnimMode: { value: animationType === 'rotate' ? 0 : animationType === 'rotate3d' ? 1 : 2 },
        uColorA: { value: colorVecs[0] },
        uColorB: { value: colorVecs[1] },
        uColorC: { value: colorVecs[2] },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      renderer.setSize(el.clientWidth, el.clientHeight);
      (program.uniforms as any).uResolution.value = [el.clientWidth, el.clientHeight];
    }

    const ro = new ResizeObserver(() => resize());
    ro.observe(el);
    resize();

    let start = performance.now();
    const update = () => {
      if (!paused) {
        const now = performance.now();
        const t = (now - start) / 1000;
        (program.uniforms as any).uTime.value = t;
      }
      // Smoothly apply pointer-driven offset
      const current = (program.uniforms as any).uOffset.value as [number, number];
      const tx = targetOffsetRef.current.x;
      const ty = targetOffsetRef.current.y;
      const damp = Math.max(0.01, Math.min(1, hoverDampness));
      current[0] = current[0] + (tx - current[0]) * damp;
      current[1] = current[1] + (ty - current[1]) * damp;

      renderer.render({ scene: mesh, camera });
      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);

    function onPointerMove(e: PointerEvent) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      mouseRef.current.x = x;
      mouseRef.current.y = y;
      targetOffsetRef.current.x = offset.x + x * 0.1; // slight parallax
      targetOffsetRef.current.y = offset.y + y * 0.1;
    }

    el.addEventListener('pointermove', onPointerMove);

    rendererRef.current = renderer;
    programRef.current = program;

    return () => {
      el.removeEventListener('pointermove', onPointerMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      try {
        el.removeChild(gl.canvas);
      } catch {}
      (renderer as any).gl.getExtension;
    };
  }, [animationType, intensity, speed, distort, paused, offset.x, offset.y, hoverDampness, rayCount, mixBlendMode, colorVecs]);

  // Update uniforms when props change without recreating
  useEffect(() => {
    if (!programRef.current) return;
    (programRef.current.uniforms as any).uSpeed.value = speed;
    (programRef.current.uniforms as any).uIntensity.value = intensity;
    (programRef.current.uniforms as any).uDistort.value = distort;
    (programRef.current.uniforms as any).uRayCount.value = rayCount;
    (programRef.current.uniforms as any).uAnimMode.value = animationType === 'rotate' ? 0 : animationType === 'rotate3d' ? 1 : 2;
  }, [speed, intensity, distort, rayCount, animationType]);

  useEffect(() => {
    if (!programRef.current) return;
    (programRef.current.uniforms as any).uColorA.value = colorVecs[0];
    (programRef.current.uniforms as any).uColorB.value = colorVecs[1];
    (programRef.current.uniforms as any).uColorC.value = colorVecs[2];
  }, [colorVecs]);

  return (
    <div ref={containerRef} className={className} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
  );
}
