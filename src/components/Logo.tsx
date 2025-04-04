
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/5cfc12be-7d72-4c7e-a83e-66aa41eaa381.png" 
        alt="VIT Logo" 
        className="h-14" 
      />
      <div className="ml-2">
        <div className="text-xl font-bold text-[#3b4d82]">VIT</div>
        <div className="text-xs text-[#3b4d82]">Vellore Institute of Technology</div>
        <div className="text-[8px] text-[#3b4d82]">(Deemed to be University under section 3 of UGC Act, 1956)</div>
      </div>
    </div>
  );
};

export default Logo;