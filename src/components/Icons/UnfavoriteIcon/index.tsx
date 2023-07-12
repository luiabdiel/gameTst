import * as S from "./styles";

type UnfavoriteIconProps = {
  onClick: () => void;
};

export function UnfavoriteIcon({ onClick }: UnfavoriteIconProps) {
  return (
    <S.Svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.17157 5.77004C4.73367 4.25015 7.26633 4.25015 8.82842 5.77004L9.99999 6.90996L11.1716 5.77004C12.7337 4.25015 15.2663 4.25015 16.8284 5.77004C18.3905 7.28993 18.3905 9.75416 16.8284 11.274L9.99999 17.918L3.17157 11.274C1.60948 9.75416 1.60948 7.28993 3.17157 5.77004Z"
        fill="white"
      />
    </S.Svg>
  );
}
