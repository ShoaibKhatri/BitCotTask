import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import MovieCard from "../components/MovieCard";
import { data } from "../data/data";

const Series = () => {
  const [series, setSeries] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let series = data[0].entries.filter(
      (series) => series.programType === "series"
    );
    setSeries(series);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      <Heading heading="Popular Series" />
      {loading ? (
        <div className="m-5">
          <span className="m-5 ">Loading...</span>
        </div>
      ) : (
        <>
          <div className="d-flex flex-wrap h-auto justify-content-center">
            {series
              ? series.map((movie, index) => {
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

export default Series;
