import { useState, useEffect } from "react";
import {
  Cards,
  ErrorMessage,
  Loading,
  ResetFilterButton,
  SelectCategory,
  SortedButton,
} from "..";
import { useCards } from "../../hooks/useCards";
import ReactPaginate from "react-paginate";
import * as S from "./styles";

export type OnPageChangeProps = {
  selected: number
}

export function Main() {
  const { games, isLoading, error, setGames, dataGames, itemOffset, setItemOffset } = useCards();
  const [pageCount, setPageCount] = useState(0);
  const [endOffset, setEndOffset] = useState(0);

  const itemsPerPage = 9;

  useEffect(() => {
    const buttonPageOne = document.querySelector(".page-item.number");
    buttonPageOne?.classList.add("remove-manual")

    setEndOffset(itemOffset + itemsPerPage);
    setGames(dataGames.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dataGames.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, setGames, dataGames, endOffset]);

  const handlePageClick = (event: OnPageChangeProps) => {
    const buttonPageOne = document.querySelector(".page-item.number.remove-manual");
    buttonPageOne?.classList.remove("active")

    const newOffset = (event.selected * itemsPerPage) % dataGames.length;

    setItemOffset(newOffset);
  };

  return (
    <S.Container>
      {error ? <ErrorMessage error={error} /> : <></>}
      {!error && games ? (
        <S.FilterGroup>
          <div>
            <SelectCategory />
            <SortedButton />
          </div>
          <ResetFilterButton />
        </S.FilterGroup>
      ) : (
        <></>
      )}
      {isLoading && <Loading />}
      <S.ContentGrid>
        {!error &&
          games &&
          games.map((gameData, index) => (
            <Cards
              key={index}
              rate={gameData.rate ? gameData.rate : 0}
              thumbnail={gameData.thumbnail}
              title={gameData.title}
              genre={gameData.genre}
            />
          ))}
      </S.ContentGrid>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item number"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={itemOffset === 0 ? itemOffset : -0}
      />
    </S.Container>
  );
}
