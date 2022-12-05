import { useHistory, Redirect } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import api from "../services/api";

export default function Login({ autenticado, setAutenticado, setUser }) {
  const history = useHistory();

  const validacoesYup = yup.object().shape({
    email: yup
      .string()
      .required(" Preencher campo Email é obrigatorio!")
      .email("Email inválido"),
    password: yup
      .string()
      .required("Preencher campo senha é obrigatório!")
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$",
        "Formato de senha incorreto ! São necessarios 8 caracteres, ter letras maiúsculas e minúsculas, números e ao menos um símbolo"
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validacoesYup) });

  function onSubmit(data) {
    api
      .post("/client/login", data)
      .then((response) => {
        console.log(response.data);
        window.localStorage.clear();
        const { token, user } = response.data;
        setUser(response.data.user);
        window.localStorage.setItem("dadosUser", JSON.stringify(user));
        window.localStorage.setItem("token", JSON.stringify(token));
        setAutenticado(true);
        toast.success("Login,efetuado com sucesso!");
        return history.push(`/schedules`);
      })
      .catch((error) => {
        toast.error("Email ou senha inválidos, tente novamente!");
      });
  }
  if (autenticado) {
    return <Redirect to={`/schedules`} />;
  }

  return (
    <div>
      <button onClick={() => history.push("/registration")}>
        Ainda não possuo uma conta
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
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

          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}
