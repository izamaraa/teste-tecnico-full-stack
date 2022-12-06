import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { ImageBackground } from "./styled";

export default function Registration({ autenticado }) {
  const history = useHistory();

  const validacoesYup = yup.object().shape({
    name: yup.string().required("Preencher campo nome é obrigatório!"),
    email: yup
      .string()
      .required(" Preencher campo Email é obrigatorio!")
      .email("Email inválido!"),
    password: yup
      .string()
      .required(" Preencher campo Password é obrigatorio!")
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$",
        "Formato de senha incorreto ! São necessarios 8 caracteres, ter letras maiúsculas e minúsculas, números e ao menos um símbolo"
      ),
    tel: yup.string().required(" Preencher campo tel é obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validacoesYup) });
  function onSubmit(data) {
    api
      .post("/client", data)
      .then((response) => {
        console.log(response);
        toast.success("Usuario cadastrado com sucesso!");
        return history.push("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ops,erro ao criar a conta.Tente outro email!");
      });
  }
  if (autenticado) {
    return <Redirect to={`/schedules`} />;
  }
  return (
    <>
      <ImageBackground>
        <div className="div">
          <button onClick={() => history.push("/login")}>
            Já tenho uma conta
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Informe Seu nome *</label>
            <input name="name" {...register("name")}></input>
            <>
              <span>{errors.name?.message}</span>
            </>
          </div>
          <div>
            <label>Informe Seu Email *</label>
            <input name="email" {...register("email")}></input>
            <>
              <span>{errors.email?.message}</span>
            </>
          </div>
          <div>
            <label>Informe Seu Password *</label>
            <input name="password" {...register("password")}></input>
            <>
              <span>{errors.password?.message}</span>
            </>
          </div>
          <div>
            <label>Informe Seu Telefone *</label>
            <input name="tel" {...register("tel")}></input>
            <>
              <span>{errors.tel?.message}</span>
            </>
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </ImageBackground>
    </>
  );
}
