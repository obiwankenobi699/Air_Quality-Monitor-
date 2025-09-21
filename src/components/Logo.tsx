
import React from 'react';
import logoImg from './logo.jpg';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logoImg}
        alt="OceanSutra logo"
        className="h-10 w-10 rounded-xl object-contain"
        loading="eager"
        decoding="async"
      />
      <span className="text-xl font-semibold tracking-tight text-foreground">
        OceanSutra
      </span>
    </div>
  );
};

export default Logo;
