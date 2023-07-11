import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { UseAuth } from "../../hooks";
import { AppUser } from "../../@types/appUser";
import { createUser } from "../../services/db";
import * as S from "./styles";

interface RegisterFormInput {
  name: string;
  birthday: Date;
  email: string;
  password: string;
}

type RegisterProps = {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Register({setIsSignUp}: RegisterProps) {
  const { handleSignUp, successSignUp } = UseAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>();

  const onSubmit: SubmitHandler<RegisterFormInput> = async (data) => {
    data.birthday.setDate(data.birthday.getDate() + 1);

    const user = await handleSignUp(data);

    if (user) {
      const newUserData: AppUser = {
        uid: user.uid,
        name: data.name,
        birthDate: data.birthday,
        email: data.email,
        favorites: [],
        gifts_list: [],
        ratings: [],
      }

      await createUser(newUserData);

      navigate("/");
    }
  };

  return (
    <S.Container>
      <div className="box">
        <S.BorderLine />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Crie uma conta</h2>
          <div className="input-box">
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
            <span className="error-text">
              É necessário preencher seu nome
            </span>
          )}
          <div className="input-box">
            <input
              {...register("birthday", { required: true, valueAsDate: true })}
              type="date"
              placeholder=" "
            />
            <span>Data de nascimento</span>
            <i></i>
          </div>
          {errors.birthday?.type === "required" && (
            <span className="error-text">
              É necessário preencher sua data de nascimento
            </span>
          )}
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
            <p onClick={() => setIsSignUp(false)}>Login</p>
          </div>
          <S.SubmitButton type="submit" value="Criar" />
          {successSignUp && <p className='success-msg'>Usuário criado com sucesso!!</p>}
        </S.Form>
        <S.BeforeElement />
        <S.AfterElement />
      </div>
    </S.Container>
  );
}
