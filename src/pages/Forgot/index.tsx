import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { UseAuth } from "../../hooks";
import * as S from "./styles";

interface ForgotInput {
  email: string;
}

export function Forgot() {
  const { handleForgot } = UseAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotInput>();

  const onSubmit: SubmitHandler<ForgotInput> = (data) => {
    handleForgot(data);
    console.log(data);
  };

  return (
    <S.Container>
      <div className="box">
        <S.BorderLine />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Preencha seu email para recuperar senha</h2>
          <div className="input-box">
            <input
              {...register("email", {
                required: true,

                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
              placeholder=" "
            />
            <span>Email</span>
            <i></i>
          </div>
          {(errors.email?.type === "required" && (
            <span className="error-text">
              É necessário preencher seu email corretamente
            </span>
          )) ||
            (errors.email?.type === "pattern" && (
              <span className="error-text">
                Preencha com um email válido
              </span>
            ))}
          <div className="links">
            <Link to={"/auth"}>Fazer login</Link>
          </div>
          <S.SubmitButton type="submit" value="Recuperar senha" />
        </S.Form>
        <S.BeforeElement />
        <S.AfterElement />
      </div>
    </S.Container>
  );
}
