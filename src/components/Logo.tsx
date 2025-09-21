
import React from 'react';
import { Waves } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
        <Waves size={24} className="text-primary-foreground" />
      </div>
      <span className="text-xl font-semibold tracking-tight text-foreground">
        OceanSutra
      </span>
    </div>
  );
};

export default Logo;
