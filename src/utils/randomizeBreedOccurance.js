import axios from "axios";
import uniqid from "uniqid";

const randomizeBreedOccurance = async (breeds, amount) => {
  const amountOfIterations = [...Array(amount).keys()];
  const dogsData = {};

  // eslint-disable-next-line
  for await (const _ of amountOfIterations) {
    try {
      let randomBreed;
      let count = 0;
      while (randomBreed === undefined && count <= 100) {
        randomBreed = breeds[Math.floor(Math.random() * breeds.length - 1)];
        if (count === 100) randomBreed = "pitbull";
        count++;
        // not sure why, but sometimes it would return undefined
      }

      const id = uniqid();

      const res = await axios.get(
        `https://dog.ceo/api/breed/${randomBreed}/images/random`
      );
      const img = res.data.message;

      dogsData[id] = {
        breed: randomBreed,
        likes: 0,
        id,
        img,
      };
    } catch (e) {
      console.log(e);
    }
  }

  return dogsData;
};

export default randomizeBreedOccurance;
