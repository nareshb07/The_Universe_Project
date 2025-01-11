"use client";
import React from "react";
import { BackgroundBeams } from "/src/components/ui/BackgroundBeams";
import QuoteList from '/src/components/QuoteList'  

function BackgroundBeamsDemo() {
  return (
    (<div
      className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          To Universe
        </h1>
        <p></p>
        <p
          className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Tell the universe your wish! Just type what’s in your heart and let your dreams be heard—it’s that simple."
        </p>
        <textarea
          placeholder="Enter your wish here..."
          className="bg-opacity-50 rounded-lg border text-neutral-300 focus:outline-none border-neutral-600 shadow-md shadow-neutral-500 focus:ring-neutral-200 w-full relative z-10 mt-4 p-4 bg-neutral-950 placeholder:text-neutral-700"
          rows="5">
      </textarea>
      <div className="flex justify-center mt-4">
        <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#525252_0%,#d4d4d4_50%,#525252_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-neutral-300 backdrop-blur-3xl">
            Send Wish
          </span>
        </button>
      </div>

      <div className="flex flex-col items-center mt-10">
        <QuoteList />
        {/* <h1 className="text-white mt-10">Whatever you ask for in your mind, the universe will deliver.</h1> */}
      </div>

      </div>
      <BackgroundBeams />
    </div>)
  );
}

export default BackgroundBeamsDemo;