import { styled } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  max-width: 59.8125rem;

  margin: 0 auto;

  padding: 1rem;

  .pagination {
    display: flex;
    justify-content: space-between;
  }

  .page-item {
    text-align: center;

    background-color: ${({ theme }) => theme.white};
    border-radius: 4px;

    min-width: 30px;
    border: solid 1px #b3b3b3;
    padding: 2px;

    color: ${({ theme}) => theme['blue-300']};

    &:hover {
      background-color: #d1d1d1;
      cursor: pointer;
    }
  }

  .page-item.active {
    background-color: ${({ theme }) => theme['blue-300']};
    color: ${({ theme }) => theme.white};
  }

  .page-item.disabled {
    color: #b3b3b3;

    cursor: not-allowed;

    &:hover {
      background-color: ${({ theme }) => theme.white};
    }
  }

  @media screen and (max-width: 531px){
    padding: 1rem 3.25rem;
  }
`
export const ContentGrid = styled.div`
  width: 100%;

  padding-top: 1rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px 80px;

  margin-bottom: 16px;
`
export const FilterGroup = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 380px){
    flex-direction: column;
    gap: 5px;
  }

  >div {
    display: flex;
    gap: 8px;

    @media screen and (max-width: 380px){
      flex-direction: column;
    }
  }

  &:last-child {
    /* min-width: 180px; */
  }
`
