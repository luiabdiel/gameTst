import { useForm, SubmitHandler } from "react-hook-form";
import { SearchIcon } from "..";
import { useInputSearch } from "../../hooks";
import * as S from "./styles";

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
    <S.Container>
      <S.Form role="form" onSubmit={handleSubmit(onSearch)}>
        <S.Input
          type="text"
          {...register("search")}
          defaultValue={""}
          placeholder="Digite o nome do jogo"
        />
        <S.Button type="submit">
          <SearchIcon />
        </S.Button>
      </S.Form>
    </S.Container>
  );
}
