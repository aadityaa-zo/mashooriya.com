import React from 'react';
// import LoaderRing from './LoaderRing';

const RingLoader: React.FC = () => {
  return (
    <div className="bg-black flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-4 border-gray-500 relative">
        <div className="absolute -inset-1 rounded-full border-4 border-transparent border-t-Yellow animate-spin" />
      </div>
    </div>
  );
};

export default RingLoader;