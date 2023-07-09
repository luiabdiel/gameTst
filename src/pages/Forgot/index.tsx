import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import S from "./index.module.scss";
import { UseAuth } from "../../hooks";

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
    <div className={S["container"]}>
      <div className={S["box"]}>
        <span className={S["border-line"]}></span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Preencha seu email para recuperar senha</h2>
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
          <div className={S["links"]}>
            <Link to={"/auth"}>Fazer login</Link>
          </div>
          <input type="submit" value="Recuperar senha" />
        </form>
      </div>
    </div>
  );
}
