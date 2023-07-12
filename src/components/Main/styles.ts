import { styled } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  max-width: 59.8125rem;

  margin: 0 auto;

  padding: 1rem;

  @media screen and (max-width: 531px){
    padding: 1rem 3.25rem;
  }
`
export const ContentGrid = styled.div`
  width: 100%;

  padding-top: 1rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px 100px;
`
export const FilterGroup = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
