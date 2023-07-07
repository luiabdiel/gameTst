import { useContext } from "react";
import { InputSearchContext } from "../../context/InputSearchContext";

const useInputSearch = () => {
  const context = useContext(InputSearchContext);

  return context;
};

export { useInputSearch };
