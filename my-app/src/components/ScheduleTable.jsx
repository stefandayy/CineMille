import React from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const ScheduleTable = ({ list }) => {
  return (
    <>
      <h1 className='text-center py-5'>Programmazione</h1>
      <Container>
        <Table variant='dark' striped bordered size='sm' className=''>
          <thead>
            <tr>
              <th>#</th>
              <th>Film</th>
              <th className='text-center'>Disponibilità</th>
              <th className='text-center'>Sale</th>
            </tr>
          </thead>
          <tbody>
            {list.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.id + 1}</td>
                <td>
                  <Link to={`/movie/${movie.id}`}>{movie.Title}</Link>
                  <br />
                  <Link to={`/review/${movie.id}`}>
                    {" "}
                    {movie.Title} - Recensioni{" "}
                  </Link>
                </td>

                <td className='text-center'>Fino a {movie.Disponibile}</td>
                <td className='text-center'>{movie.Sale.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ScheduleTable;
