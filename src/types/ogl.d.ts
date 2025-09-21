declare module 'ogl' {
  export class Renderer {
    constructor(options?: any);
    gl: any;
    setSize(width: number, height: number): void;
    render(opts: any): void;
  }

  export class Camera {
    constructor(gl: any, options?: any);
    position: { x: number; y: number; z: number };
  }

  export class Program {
    constructor(gl: any, options: any);
    uniforms: any;
  }

  export class Mesh {
    constructor(gl: any, options: any);
  }

  export class Triangle {
    constructor(gl: any);
  }

  export class Texture {
    constructor(gl: any, options?: any);
    image: any;
    width: number;
    height: number;
    minFilter: any;
    magFilter: any;
    wrapS: any;
    wrapT: any;
    flipY: boolean;
    generateMipmaps: boolean;
    format: any;
    type: any;
    needsUpdate: boolean;
    texture: any;
  }
}
