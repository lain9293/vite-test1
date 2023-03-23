import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../main/app/hooks";
import { fetchDogs, selectAllDogs } from "../data/DogsSlice";
import Dog from "./Dog";
import "./DogsList.css";

export const DogsList = () => {
  const dispatch = useAppDispatch();
  const dogs = useAppSelector(selectAllDogs);

  const dogStatus = useAppSelector((state) => state.dogs.status);
  const error = useAppSelector((state) => state.dogs.error);

  useEffect(() => {
    if (dogStatus === "idle") {
      void dispatch(fetchDogs());
    }
  }, [dogStatus, dispatch]);

  let content;

  if (dogStatus === "loading") {
    content = <p>Cargando...</p>;
  } else if (dogStatus === "succeeded") {
    content = dogs.map((dog) => <Dog key={dog} dogImg={dog} />);
  } else if (dogStatus === "failed") {
    content = <div>{error}</div>;
  }

  return <section className="dogs-list">{content}</section>;
};

export default DogsList;
