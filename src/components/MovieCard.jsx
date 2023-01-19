import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const MovieCard = ({ movie }) => {
  return (
    // <div className="col-lg-2 col-md-3 col-sm-5 container">
    //   <img
    //     src={movie.images["Poster Art"].url}
    //     alt=""
    //     height="250px"
    //     width="100%"
    //   />
    //   <div className="w-100">
    //     <div>{movie.title}</div>
    //     <div className="w-100">
    //       <span className="desc-text">{movie.description}</span>
    //     </div>
    //     <div>
    //       <span>Release Year: </span>
    //       <span>{movie.releaseYear}</span>
    //     </div>
    //   </div>
    // </div>

    <Card style={{ width: "15rem" }} className="m-4">
      <Card.Img
        variant="top"
        height={"275px"}
        src={movie.images["Poster Art"].url}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text className="desc-text">{movie.description}</Card.Text>
        <Card.Text>Release Year : {movie.releaseYear} </Card.Text>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
