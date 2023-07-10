import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import S from "./index.module.scss";
import { UseAuth } from "../../hooks";

interface LoginFormInput {
  email: string;
  password: string;
}

export function Login() {
  const { handleSignIn } = UseAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

    const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    const user = await handleSignIn(data);

    //@ts-ignore
    if (user.email) {
      navigate("/")
    }
  };

  return (
    <div className={S["container"]}>
      <div className={S["box"]}>
        <span className={S["border-line"]}></span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Entrar</h2>
          <div className={S["input-box"]}>
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
            <span className={S["error-text"]}>
              É necessário preencher seu email corretamente
            </span>
          )) ||
            (errors.email?.type === "pattern" && (
              <span className={S["error-text"]}>
                Preencha com um email válido
              </span>
            ))}
          <div className={S["input-box"]}>
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
            <span className={S["error-text"]}>
              É necessário preencher sua senha corretamente
            </span>
          )}
          <div className={S["links"]}>
            <Link to={"/forgot"}>Esqueceu sua senha?</Link>
            <Link to={"/register"}>Cadastre-se</Link>
          </div>
          <input type="submit" value="Entrar" />
        </form>
      </div>
    </div>
  );
}
