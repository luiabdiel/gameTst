import { useForm, SubmitHandler } from "react-hook-form";
import { SearchIcon } from "..";
import { useInputSearch } from "../../hooks";
import S from "./index.module.scss";

type Input = {
  search: string;
};

export function InputSearch() {
  const { setInputFilter } = useInputSearch();
  const { register, handleSubmit } = useForm<Input>();

  const onSearch: SubmitHandler<Input> = ({ search }) => {
    if (search.length > 0) {
      setInputFilter(search);
    } else {
      setInputFilter("");
    }
  };

  return (
    <div className={S["search"]}>
      <form role="form" onSubmit={handleSubmit(onSearch)}>
        <input
          type="text"
          {...register("search")}
          defaultValue={""}
          placeholder="Digite o nome do jogo"
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
