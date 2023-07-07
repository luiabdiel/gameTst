type ErrorMessageProps = {
  text: string;
};

export function ErrorMessage({ text }: ErrorMessageProps) {
  return <p>{text}</p>;
}
