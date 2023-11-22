"use client"
import React, { useRef } from "react";
import useFlicker from "./hooks/useFlicker";

export default function Home() {

  const textWrapperRef1 = useRef<HTMLHeadingElement>(null);
  const textWrapperRef2 = useRef<HTMLHeadingElement>(null);

  useFlicker([textWrapperRef1, textWrapperRef2]);


  return (
    <main className="flex">
      <div className="flex text-6xl md:text-9xl relative bg-repeat-x bg-[calc(50%+0.6rem)] bg-cover bg-[url('#')] justify-center items-center">
        <h1 id='text' ref={textWrapperRef1} className="inline-block text-pink-500 font-medium font-neon drop-shadow-3xl tracking-widest whitespace-nowrap animate-bobble">Welcome.</h1>
        <h1 id='reflection' ref={textWrapperRef2} className="tracking-widest absolute top-1/2 opacity-10 animate-bobble rotate-180">Welcome.</h1>
      </div>
    </main>
  )
}
