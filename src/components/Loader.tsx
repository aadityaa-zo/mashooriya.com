"use client"
import { useEffect, useState } from "react";

interface LoaderProps {
  isLoading?: boolean;
}

const Loader = ({ isLoading }: LoaderProps) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500); 
      return () => clearTimeout(timer);
    } else {
      setShouldRender(true);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`
        fixed inset-0 bg-black flex flex-col items-center justify-center z-9999
        transition-all duration-500 ease-out
        ${isLoading ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
    >
      {/* <img
        src="/logo.svg"
        alt="Loading"
        className="w-[30vw] animate-pulse opacity-50"
      /> */}

       <span className="tracking-widest pb-10">
         <div className="w-12 h-12 border-4 border-yellow-900/20 border-t-yellow-300 rounded-full animate-spin" />
        </span>

      <p className="text-4xl py-4 text-white">
        LOADING...
      </p>

    </div>
  );
};

export default Loader;