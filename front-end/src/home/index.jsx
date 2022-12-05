import { useHistory, Redirect } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  return (
    <div>
      <div>
        <h1>Armazene seus contatos</h1>
        <h3>De forma simples e rápida</h3>
        <button onClick={() => history.push("/registration")}>
          Fazer cadastro
        </button>
        <button onClick={() => history.push("/login")}>
          Já tenho uma conta
        </button>
      </div>
      <div>
        <img
          src={
            "https://img.myloview.com.br/adesivos/estilo-retro-telefone-preto-do-vintage-no-fundo-preto-400-52673917.jpg"
          }
        />
      </div>
    </div>
  );
}
