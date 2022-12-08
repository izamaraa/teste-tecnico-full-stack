import { Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../services/api";
import { ImageSchedule } from "./styled";
import ModalContact from "../modalContacts";
import ModalEditContact from "../modalEditContacts";
import ModalEditUser from "../modalUser";
import { toast } from "react-toastify";
export default function Schedule({ autenticado, setAutenticado }) {
  const history = useHistory();

  const [modalOn, setModalOn] = useState(false);
  const [contacts, setContacts] = useState([]);

  //edit do contact
  const [modalUpadate, setModalUpdate] = useState(false);
  const [contactUpdate, setContactUpdate] = useState({});

  // edit do usuario
  const [modalUpdateUser, setModalUpdateUser] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    carregaContacts();
  }, []);
  function exit() {
    localStorage.clear();
    setAutenticado(false);
    return history.push("/login");
  }

  if (!autenticado) {
    return <Redirect to="/login" />;
  }
  function carregaContacts() {
    api
      .get(`/client/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setContacts(response.data);
      })
      .catch((err) => console.log(err));
  }

  function criaContacts(data) {
    api
      .post(`/client/contact`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setContacts([...contacts, response.data]))
      .catch((err) => console.log(err));
  }
  function deletarContact(contacts) {
    api
      .delete(`/client/delete/contact/${contacts.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => carregaContacts())
      .catch((err) => console.log(err));
  }

  function editarContact(data) {
    // console.log(contactUpdate);
    // console.log(data);
    Object.entries(data).forEach(([chave, valor]) => {
      if (valor === "") {
        delete data[chave];
      }
    });
    console.log(data);
    api
      .patch(`/client/update/contact/${contactUpdate.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => carregaContacts(data))

      .catch((err) => console.log(err));
  }

  function getAccount() {
    api
      .get(`/client/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        localStorage.setItem("id", res.data.client.id);
        localStorage.setItem("name", res.data.client.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getAccount();
  }, []);

  function deleteAccount() {
    api
      .delete(`/client/${localStorage.getItem("id")}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        localStorage.clear();
        setAutenticado(false);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function editAccount(data) {
    console.log(data);
    Object.entries(data).forEach(([chave, valor]) => {
      if (valor === "") {
        delete data[chave];
      }
    });
    api
      .patch(`/client/${localStorage.getItem("id")}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Usuario editado com sucesso!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <ImageSchedule>
        <div className="cabeçalho">
          <h1>Olá, {localStorage.getItem("name")}</h1>

          <button onClick={() => setModalOn(true)}>Adicionar</button>
          {modalOn ? (
            <ModalContact setModalOn={setModalOn} funcaoModal={criaContacts} />
          ) : (
            ""
          )}
          <button onClick={() => deleteAccount()}>Deletar conta</button>
          <button onClick={() => setModalUpdateUser(true)}>Editar conta</button>
          {modalUpdateUser ? (
            <ModalEditUser
              setModalUpdateUser={setModalUpdateUser}
              funcaoModalEditUser={editAccount}
            />
          ) : (
            ""
          )}
          <button onClick={exit}>sair</button>
        </div>
        <>
          <h3 color="white">Seus contatos</h3>
        </>
        <div className="contatos">
          <ol>
            {contacts?.map((item, index) => (
              <li key={index}>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.tel}</p>
                <button
                  onClick={() => {
                    setContactUpdate(item);
                    setModalUpdate(true);
                  }}
                >
                  Editar
                </button>
                {modalUpadate ? (
                  <ModalEditContact
                    setModalUpdate={setModalUpdate}
                    funcaoModalEdit={editarContact}
                  />
                ) : (
                  ""
                )}
                <button onClick={() => deletarContact(item)}>Deletar</button>
              </li>
            ))}
          </ol>
        </div>
      </ImageSchedule>
    </>
  );
}
