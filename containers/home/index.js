import React from "react";
import Movies from "@/mocks/movies.json";
import MovieCategories from '@/mocks/genres.json';
import FeaturedMovie from "@/components/featuredMovie";
import Categories from "@/components/categories";
import MovieSection from "@/components/MovieSection";

export default function HomeContainer() {
  return(
  <>
    <FeaturedMovie movie={Movies.results[1]} />
    <Categories categories = {MovieCategories.genres.slice(0,5)} />
    <MovieSection title ="Popular" movies={Movies.results.slice(1,7)}/>
    <MovieSection title ="Popular" movies={Movies.results.slice(1,7)}/>


  </>)
}
