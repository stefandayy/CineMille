import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../Movies";
import { Card, Col, Container, Row } from "react-bootstrap";
const MoviePage = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));
  if (!movie) {
    return <div>Movie not found</div>;
  }
  return (
    <div id="movie">
      
      <Container className="py-5" >
        <Card bg="dark">
          <Row sm={1} md={1} lg={2}>
            <Col className="text-center">
              <Card.Img
                variant="top"
                src={movie.Poster}
                style={{ width: "230px" }}
                className="m-3"
              />
            </Col>{" "}
            <Col>
              <Card.Body className="my-5">
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                  {" "}
                  <b>Regia: {movie.Director}</b>
                </Card.Text>
                <Card.Text>
                  {" "}
                  <b>Attori: {movie.Actors} </b>
                </Card.Text>
                <Card.Text>
                  {" "}
                  <b>Durata: {movie.Runtime}</b>
                </Card.Text>
                <Card.Text>
                  <b>Year: {movie.Year} </b>
                </Card.Text>
                <Card.Text>{movie.Plot}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default MoviePage;
