import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { setDogs, getDogs } from "./features/dog/dogSlice";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const App = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dog.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <Container className="App">
      <LeftSide />
      <RightSide />
    </Container>
  );
};

export default App;
