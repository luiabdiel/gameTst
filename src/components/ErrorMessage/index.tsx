import { AxiosError } from "axios";
import { useEffect, useState } from "react";
const errorCodes = [500, 502, 503, 504, 507, 508, 509];

type ErrorMessageProps = {
  error? : AxiosError;
}

export function ErrorMessage( {error} : ErrorMessageProps) {
  const [message, setMessage] = useState("");

  useEffect(() => {
      if(error) {
        if (error.response && errorCodes.includes(error.response.status)) {
          setMessage("O servidor falhou em responder, tente recarregar a página")
        } else if (error.code === "ECONNABORTED") {
          setMessage("O servidor demorou para responder, tente mais tarde")
        } else {
          setMessage("O servidor não conseguirá responder por agora, tente voltar novamente mais tarde")
        }
      }
  }, [])

  return <p role="paragraph" >{message}</p>;
}
