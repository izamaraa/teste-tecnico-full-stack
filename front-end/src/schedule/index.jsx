import { Redirect, useHistory } from "react-router-dom";

export default function Schedule() {
  const history = useHistory();
  return (
    <div>
      <h2>ola usuario</h2>
      <button onClick={() => history.push("/home")} className="sair">
        sair
      </button>
    </div>
  );
}
