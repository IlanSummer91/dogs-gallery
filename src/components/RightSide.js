import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Rows from "./Rows";
import { chunk } from "lodash";

const Container = styled.div`
  width: 85%;
`;

const RightSide = () => {
  const dogSlice = useSelector((state) => state.dog);
  const rows = chunk(Object.values(dogSlice.dogsData), 5);

  return (
    <Container>
      {rows.map((row, index) => (
        <Rows row={row} key={index} />
      ))}
    </Container>
  );
};

export default RightSide;
