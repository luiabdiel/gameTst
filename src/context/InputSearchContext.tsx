import { createContext, useState } from "react";

type InputSearchProps = {
  inputFilter: string;
  setInputFilter: React.Dispatch<React.SetStateAction<string>>;
};

const InputSearchContext = createContext<InputSearchProps>(
  {} as InputSearchProps
);

const InputSearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [inputFilter, setInputFilter] = useState("");

  return (
    <InputSearchContext.Provider
      value={{
        inputFilter,
        setInputFilter,
      }}
    >
      {children}
    </InputSearchContext.Provider>
  );
};

export { InputSearchContext, InputSearchProvider };
