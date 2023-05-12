"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export default function FeaturedMovie({ movie = {} }) {
  const { overview, poster_path, title } = movie;
  const [text, setText] = useState("");
  useEffect(() => {
    if (overview.length > 80) {
      const txt = overview.slice(0, 80) + "...";
      setText(txt);
    } else {
      setText(overview);
    }
  }, [overview]);
  return (
    <div className="text-slate-200  w-[500px] my-10">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-lg font-medium my-4">{text}</p>
      <div className="flex ">
        <Link
          href="/"
          className="bg-slate-200 px-14 py-2 mr-2  rounded-2xl text-black font-semibold"
        >
          {" "}
          Trailer
        </Link>
        <button className="bg-transparent border-white rounded-full border-solid border-[1px] px-3">
          <FaPlus />
        </button>
      </div>

      <div>
        <div
          className="absolute top-0 right-0  w-full h-full z-[-1]"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,9) 20%, rgba(0,0,0,7) 10%, rgba(255,255,255,0) 100%)",
          }}
        ></div>
          <Image
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
          className="w-full  z-[-2] object-cover "
        />
      </div>
    </div>
  );
}
