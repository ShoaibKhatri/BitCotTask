import React, { useEffect, useState } from "react";
import Series from "../assets/images/seriesImage.jpeg";
import Movies from "../assets/images/moviesImage.jpeg";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="position-relative home-main">
      <Heading heading="Popular Titles" />
      {loading ? (
        <div className="m-5">
          <span className="m-5 ">Loading...</span>
        </div>
      ) : (
        <>
          <div className="d-flex p-4 popular-main ">
            <Link
              to="/series"
              className="d-flex flex-column  popular-series text-decoration-none text-dark"
            >
              <img src={Series} alt="" />
              <span>Popular series</span>
            </Link>
            <Link
              to="/movies"
              className="d-flex flex-column text-decoration-none text-dark"
            >
              <img src={Movies} alt="" />
              <span>Popular movies</span>
            </Link>
          </div>
        </>
      )}
      <div className="position-absolute bottom-0 w-100">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
