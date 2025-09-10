import React from "react";
import { Link } from "react-router-dom";

const WorkInProgress = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-center px-6">
      {/* Sad Emoji / Illustration */}
      <div className="text-7xl mb-4">😔</div>

      {/* Headline */}
      <h1 className="text-5xl font-bold text-[#c778dd] mb-4">
        Oops… This page isn’t ready yet
      </h1>

      {/* Sub-text */}
      <p className="text-zinc-400 max-w-xl mb-6">
        We know, it’s disappointing. We’re still working hard behind the scenes to bring you something amazing.  
        Thanks for your patience 💛
      </p>

      {/* Action */}
      <Link
        to="/"
        className="px-6 py-2 bg-[#c778dd] text-white rounded-lg shadow-md hover:bg-[#a055c0] transition"
      >
        Take Me Home
      </Link>

      {/* Footer Note */}
      <p className="text-xs text-zinc-500 mt-8">
        (Even the best companies have work-in-progress pages, right? 😉)
      </p>
    </div>
  );
};

export default WorkInProgress;
