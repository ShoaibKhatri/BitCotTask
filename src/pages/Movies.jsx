import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import MovieCard from "../components/MovieCard";
import { data } from "../data/data";

const Movies = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(data);
    let movies = data[0].entries.filter(
      (movie) => movie.programType === "movie"
    );
    setMovies(movies);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="position-relative">
      <Heading heading="Popular Movies" />
      {loading ? (
        <div className="m-5">
          <span className="m-5 ">Loading...</span>
        </div>
      ) : (
        <>
          <div className="d-flex flex-wrap h-auto justify-content-center">
            {movies
              ? movies.map((movie, index) => {
                  return <MovieCard movie={movie} />;
                })
              : ""}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Movies;
