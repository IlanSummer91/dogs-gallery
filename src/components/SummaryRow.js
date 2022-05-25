import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
  font-size: clamp(16px, 1.5vw, 24px);
  font-family: Arial, Helvetica, sans-serif;
  gap: 10px;
`;

const SummaryRow = ({ breed, likes }) => {
  return (
    <Container>
      <div>{breed}:</div>
      <div>{likes}</div>
    </Container>
  );
};

export default SummaryRow;
