import React from 'react';
 import Movies from '../../mocks/movies.json';
import FeaturedMovie from '../../components/featuredMovie';

export default function HomeContainer() {
  return (
    <FeaturedMovie movie ={Movies.results[1]}/>
  )
}
