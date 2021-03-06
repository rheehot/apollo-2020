import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Movie = ({ id, bg, isLiked }) => {
  const Container = styled.div`
  width: 180px;
  height: 270px;
`;

  const Poster = styled.div`
  background-image: url(${props => props.bg});
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  border-radius: 7px;
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center center;
`;

  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <button> {isLiked ? "Unlike" : "Like" }</button>
    </Container>
  );
};

export default Movie;