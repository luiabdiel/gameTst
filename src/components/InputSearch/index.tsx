import { useForm, SubmitHandler } from "react-hook-form";
import Search from "../../assets/search.svg";
import S from "./inputSearch.module.scss";

type Input = {
  search: string;
};

interface InputSearchProps {
  setInputFilter: React.Dispatch<React.SetStateAction<string>>;
}

export function InputSearch({ setInputFilter }: InputSearchProps) {
  const { register, handleSubmit } = useForm<Input>();

  const onSearch: SubmitHandler<Input> = ({ search }) => {
    if (search.length > 0) {
      setInputFilter(search);
    } else {
      setInputFilter('');
    }
  };

  return (
    <div className={S["search"]}>
      <form onSubmit={handleSubmit(onSearch)}>
        <input
          type="text"
          {...register("search")}
          defaultValue={""}
          placeholder="Enter the name of the game"
        />
        <button type="submit">
          <img src={Search} alt="" />
        </button>
      </form>
    </div>
  );
}
