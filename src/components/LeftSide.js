import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SummaryRow from "./SummaryRow";

const Container = styled.div`
  width: 15%;
`;

const LeftSide = () => {
  const dogSlice = useSelector((state) => state.dog);

  return (
    <Container>
      {Object.entries(dogSlice.summaryData).map(([breed, likes]) => (
        <SummaryRow breed={breed} likes={likes} />
      ))}
    </Container>
  );
};

export default LeftSide;
