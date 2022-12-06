import { useHistory } from "react-router-dom";

import { ImageOldPhone } from "./styled";
export default function Home() {
  const history = useHistory();

  return (
    <>
      <ImageOldPhone>
        <h1>Armazene seus contatos</h1>
        <h3>De forma simples e rápida !</h3>
        <div>
          <button onClick={() => history.push("/registration")}>
            Fazer cadastro
          </button>
          <button onClick={() => history.push("/login")}>
            Já tenho uma conta
          </button>
        </div>
      </ImageOldPhone>
    </>
  );
}
