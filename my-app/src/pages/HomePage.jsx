import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import HomeAbout from "../components/HomeAbout";
import HomeListComponent from "../components/HomeListComponent";

const HomePage = ({ list }) => {
  return (
    <div id="home">
      <Container className="p-5">
        <Row>
          <Col className="py-5">
            <HomeListComponent list={list} />
          </Col>
          <Col>
            <HomeAbout />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
