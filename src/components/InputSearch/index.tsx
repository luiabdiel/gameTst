import { useForm, SubmitHandler } from "react-hook-form";
import { SearchIcon } from "..";
import { useFilter } from "../../hooks/useFilter";
import { useCards } from "../../hooks/useCards";
import * as S from "./styles";
import { useFavorite } from "../../hooks";

type Input = {
  search: string;
};

export function InputSearch() {
  const { inputFilter } = useFilter();
  const { initialDataGames } = useCards();
  const {onFavorite, favorites} = useFavorite();
  const { register, handleSubmit } = useForm<Input>();

  const onSearch: SubmitHandler<Input> = ({ search }) => {
    inputFilter(onFavorite? favorites : initialDataGames, search);
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
