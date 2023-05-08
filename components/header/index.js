import React from "react";
import Link from "next/link";
import { AiFillPlayCircle } from "react-icons/ai";

export default function header() {
  return (
    <header className="container flex items-center justify-between  text-slate-200 ">
      <div >
        <Link href="/" className="flex items-center">
          <AiFillPlayCircle className="text-2xl mr-3" />
        <h2 className="text-xl"> NextFilms</h2> 
        </Link>
      </div>
      <nav className="w-[20%] flex  gap-x-10">
        <Link href="/">Movies</Link>
        <Link href="/">Kids</Link>
        <Link href="/">Series</Link>
      </nav>
    </header>
  );
}
