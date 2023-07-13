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
import * as S from "./styles";
import ReactPaginate from "react-paginate";

type OnPageChangeProps = {
  selected: number
}

export function Main() {
  const { games, isLoading, error, setGames, dataGames } = useCards();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 9;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setGames(dataGames.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(dataGames.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, setGames, dataGames]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: OnPageChangeProps) => {
    const newOffset = (event.selected * itemsPerPage) % dataGames.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
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
        pageClassName="page-item"
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
      />
    </S.Container>
  );
}
