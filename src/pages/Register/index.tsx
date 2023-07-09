import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import S from "./index.module.scss";
import { UseAuth } from "../../hooks";

interface RegisterFormInput {
  name: string;
  birthday: Date;
  email: string;
  password: string;
}

export function Register() {
  const { handleSignUp, successSignUp } = UseAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>();

  const onSubmit: SubmitHandler<RegisterFormInput> = (data) => {
    data.birthday.setDate(data.birthday.getDate() + 1);

    handleSignUp(data);
  };

  return (
    <div className={S["container"]}>
      <div className={S["box"]}>
        <span className={S["border-line"]}></span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Crie uma conta</h2>
          <div className={S["input-box"]}>
            <input
              {...register("name", {
                required: true,
                maxLength: 20,
                minLength: 3,
              })}
              placeholder=" "
            />
            <span>Nome</span>
            <i></i>
          </div>
          {errors.name?.type === "required" && (
            <span className={S["error-text"]}>
              É necessário preencher seu nome
            </span>
          )}
          <div className={S["input-box"]}>
            <input
              {...register("birthday", { required: true, valueAsDate: true })}
              type="date"
              placeholder=" "
            />
            <span>Data de nascimento</span>
            <i></i>
          </div>
          {errors.birthday?.type === "required" && (
            <span className={S["error-text"]}>
              É necessário preencher sua data de nascimento
            </span>
          )}
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
            <Link to={"/auth"}>Login</Link>
          </div>
          <input type="submit" value="Criar" />
          {successSignUp && <p className={S['success-msg']}>Usuário criado com sucesso!!</p>}
        </form>
      </div>
    </div>
  );
}
