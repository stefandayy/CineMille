import React from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const HomeListComponent = ({ list }) => {
  return (
    <>
      <Container className="d-flex justify-content-center py-3">
        <Carousel className="my-3" style={{ width: "200px" }}>
          {list.map((item) => (
            <Carousel.Item>
              <Link to={`/movie/${item.id}`}>
                <img
                  className="d-block w-100"
                  src={item.Poster}
                  alt="slide"
                  style={{ height: "312px" }}
                />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default HomeListComponent;
