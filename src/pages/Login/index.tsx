import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { UseAuth, useFavorite } from "../../hooks";
import * as S from "./styles";

interface LoginFormInput {
  email: string;
  password: string;
}

type LoginProps = {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Login({ setIsSignUp }: LoginProps) {
  const { handleSignIn } = UseAuth();
  const { getFavoritesList } = useFavorite();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    const user = await handleSignIn(data);

    if (typeof user !== "string") {
      getFavoritesList(user.uid);
      navigate("/");
    }
  };

  return (
    <S.Container>
      <div className="box">
        <S.BorderLine />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Entrar</h2>
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
              <span className="error-text">Preencha com um email válido</span>
            ))}
          <div className="input-box">
            <input
              {...register("password", {
                required: true,
                maxLength: 20,
                minLength: 6,
              })}
              placeholder=" "
            />
            <span>Senha</span>
            <i></i>
          </div>
          {errors.password?.type === "required" && (
            <span className="error-text">
              É necessário preencher sua senha corretamente
            </span>
          )}
          <div className="links">
            <p onClick={() => setIsSignUp(true)}>Cadastre-se</p>
          </div>
          <S.SubmitButton type="submit" value="Entrar" />
        </S.Form>
        <S.BeforeElement />
        <S.AfterElement />
      </div>
    </S.Container>
  );
}
