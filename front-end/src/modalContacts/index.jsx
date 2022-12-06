import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DivModal, Modal } from "./styled";

export default function ModalContact({ setModalOn, funcaoModal }) {
  const validacoesYup = yup.object().shape({
    name: yup.string().required("Nome é obrigatório!"),
    email: yup
      .string()
      .required("Email é obrigatorio!")
      .email("Email inválido"),
    tel: yup.string().required("telefon é obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validacoesYup) });

  return (
    <DivModal>
      <Modal onSubmit={handleSubmit(funcaoModal)}>
        <p>
          Cadastrar Contato
          <button onClick={() => setModalOn(false)}>x</button>
        </p>
        <label>Nome</label>
        <input name="name" {...register("name")}></input>
        <span>{errors.title?.name}</span>
        <label>Email</label>
        <input name="email" {...register("email")}></input>
        <span>{errors.email?.message}</span>
        <label>Telefone</label>
        <input name="tel" {...register("tel")}></input>
        <button type="submit">+</button>
      </Modal>
    </DivModal>
  );
}
