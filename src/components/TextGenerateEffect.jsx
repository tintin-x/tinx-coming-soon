"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
 
const words = 'Learning Will Never Be the Same. Stay Tuned!'

export function TextGenerateEffectDemo() {
 
  return (
    <div
      style={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        WebkitOverflowScrolling: "touch",
      }}
      className="w-full"
    >
      <TextGenerateEffect
        words={words}
        className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed px-4"
        style={{
          fontFamily: "'Titillium Web', sans-serif",
          fontWeight: "300",
          display: "inline-block",
        }}
        duration={1.0}
      />
    </div>
  )
}
