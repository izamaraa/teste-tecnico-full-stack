import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home";
import Login from "../login";
import Registration from "../registration";
import Schedule from "../schedule";

export default function Routes() {
  const [autenticado, setAutenticado] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAutenticado(true);
    }
  }, [autenticado]);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/registration">
        <Registration autenticado={autenticado} />
      </Route>
      <Route path="/login">
        <Login
          autenticado={autenticado}
          setAutenticado={setAutenticado}
          // setUser={setUser}
        />
      </Route>
      <Route path="/schedule">
        <Schedule
          autenticado={autenticado}
          setAutenticado={setAutenticado}
          user={user}
        />
      </Route>
    </Switch>
  );
}
