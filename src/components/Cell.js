import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateLikes } from "../slices/dogSlice";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1 1 20%;
  padding: 10px;
`;

const LikesContainer = styled.div`
  margin: 10px;
`;

const Image = styled.img`
  height: clamp(100px, 200px, 10vw);
  width: clamp(100px, 200px, 10vw);
  cursor: pointer;
`;

const Cell = ({ cell }) => {
  const { breed, likes, id, img } = cell;
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(updateLikes({ id, breed }));
  };

  return (
    <Container>
      <LikesContainer>Likes: {likes}</LikesContainer>
      <Image src={img} onClick={onClickHandler}></Image>
    </Container>
  );
};

export default Cell;
