import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DivModal, Modal } from "./styled";

export default function ModalEditContact({ setModalUpdate, funcaoModalEdit }) {
  const validacoesYup = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("Email inválido"),
    tel: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validacoesYup) });

  return (
    <DivModal>
      <Modal onSubmit={handleSubmit(funcaoModalEdit)}>
        <p>
          Editar Contato
          <button onClick={() => setModalUpdate(false)}>x</button>
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
