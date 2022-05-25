import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: center;
  font-size: clamp(16px, 1.5vw, 24px);
  font-family: Arial, Helvetica, sans-serif;
  gap: 5px;
  flex-direction: column;
`;

const Breed = styled.div`
  align-self: flex-start;
  padding-left: 15px;
  font-weight: 600;
`;

const SummaryRow = ({ breed, count, likes }) => {
  return (
    <Container>
      <Breed>{breed}</Breed>
      <div>Count: {count}</div>
      <div>Likes: {likes}</div>
    </Container>
  );
};

export default SummaryRow;
