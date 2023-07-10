import { useContext } from "react";
import { CardsDataContext } from "../../context/CardsContext";

const useCards = () => {
  const context = useContext(CardsDataContext);

  return context;
};

export { useCards };
