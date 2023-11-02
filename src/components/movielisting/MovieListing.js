import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/moviesSlice";
import MovieCard from "../moviecard/MovieCard";
function MovieListing() {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="">
        <h1>{movies.Error}</h1>
      </div>
    );
  return <div className="card bg-dark">{renderMovies}</div>;
}

export default MovieListing;
