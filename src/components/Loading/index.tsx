import * as S from "./styled"

export function Loading() {
  return (
    <S.Container>
      <S.LoadingSpinner data-testid="loading-spinner"></S.LoadingSpinner>
    </S.Container>
  )
}
