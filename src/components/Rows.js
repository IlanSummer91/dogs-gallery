import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const Container = styled.div`
  display: flex;
  min-height: 150px;
`;

const Rows = ({ row }) => (
  <Container>
    {row.map((cell) => (
      <Cell cell={cell} />
    ))}
  </Container>
);
export default Rows;
