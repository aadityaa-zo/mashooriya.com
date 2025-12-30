import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center">
        {/* 404 Text */}
        <h1 className="text-[21rem] font-semibold text-gray-400 leading-none tracking-tight md:text-[15rem] sm:text-[10rem]">
          404
        </h1>

        {/* "NOT FOUND" Label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-6">
          <div className="bg-purple-400 py-2 px-12 md:px-10 sm:px-6">
            <p className="text-5xl font-semibold text-gray-900 text-center mt-1 md:text-4xl sm:text-3xl">
              NOT FOUND
            </p>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <img src="/logo.svg" alt="logo" className="h-20 md:h-16 sm:h-14" />
      </div>
    </div>
  );
};

export default NotFoundPage;