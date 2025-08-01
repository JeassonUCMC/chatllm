import { useForm } from "react-hook-form";
import "../../styles/iniciarChat.styles.css";

const IniciarChat = ({ onIniciarChat }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onIniciarChat(data); // Llama al padre con los datos del formulario
  };

  return (
    <form className="iniciar-chat__form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="iniciar-chat__title">
        Llene el siguiente formulario para iniciar un chat.
      </h2>

      <input
        className="iniciar-chat__input"
        placeholder="Facultad"
        {...register("facultad", { required: true })}
      />
      {errors.facultad && (
        <span className="iniciar-chat__error">Facultad es requerida</span>
      )}

      <input
        className="iniciar-chat__input"
        placeholder="Proyecto Curricular"
        {...register("proyectoCurricular", { required: true })}
      />
      {errors.proyectoCurricular && (
        <span className="iniciar-chat__error">
          Proyecto Curricular es requerido
        </span>
      )}

      <input
        className="iniciar-chat__input"
        placeholder="Materia"
        {...register("materia", { required: true })}
      />
      {errors.materia && (
        <span className="iniciar-chat__error">Materia es requerida</span>
      )}

      <input
        className="iniciar-chat__input"
        placeholder="Tema y/o Subtema"
        {...register("temaSubtema", { required: true })}
      />
      {errors.temaSubtema && (
        <span className="iniciar-chat__error">
          Tema y/o Subtema es requerido
        </span>
      )}

      <input
        className="iniciar-chat__submit"
        type="submit"
        value="Iniciar chat"
      />
    </form>
  );
};

export default IniciarChat;
