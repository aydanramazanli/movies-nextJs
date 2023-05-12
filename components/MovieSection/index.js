import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function MovieSection({ title, movies }) {
  return (
    <div className="my-9 ">
      <h2 className="text-white  font-semibold my-4 text-2xl">{title}</h2>
      <div className="flex gap-5">
        {movies.map((movie) => {
            return(
                <div key={movie.id} >
                <Link href={`movie/${movie.id}`}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                   width={150}
                   height={100}
                   className="rounded-md"
                    alt={title}
                    unoptimized
                  />
                </Link>
              </div>
            )
         
        })}
      </div>
    </div>
  );
}
