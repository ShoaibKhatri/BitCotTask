import React from "react";
import Card from "react-bootstrap/Card";

const MovieCard = ({ movie }) => {
  return (
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
