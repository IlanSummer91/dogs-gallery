import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Loading from "./components/Loading";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { setDogsData, setSummaryData } from "./slices/dogSlice";
import randomizeBreedOccurance from "./utils/randomizeBreedOccurance";
import getSummaryData from "./utils/getSummaryData";

const Container = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isLoading ? "center" : "flex-start")};
  align-items: ${(props) => (props.isLoading ? "center" : "flex-start")};
  min-height: 100vh;
  min-width: 99vw;
`;

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDogBreeds = async () => {
      try {
        const res = await axios.get("https://dog.ceo/api/breeds/list/all");
        const breeds = Object.keys(res.data.message);
        const dogsData = await randomizeBreedOccurance(breeds, 100);
        dispatch(setDogsData(dogsData));
        const summaryData = getSummaryData(dogsData);
        dispatch(setSummaryData(summaryData));
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getDogBreeds();
  }, [dispatch]);

  if (isLoading)
    return (
      <Container isLoading>
        <Loading />
      </Container>
    );

  return (
    <Container className="App">
      <LeftSide />
      <RightSide />
    </Container>
  );
};

export default App;
