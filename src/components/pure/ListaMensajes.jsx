import React from "react";
import MensajeAsistente from "./MensajeAsistente";

const ListaMensajes = ({ mensajes }) => {
  return mensajes.map((msg, idx) => (
    <div
      key={idx}
      className={`input-chat__mensaje input-chat__mensaje--${msg.rol}`}
    >
      {msg.rol === "asistente" ? (
        <MensajeAsistente contenido={msg.texto} />
      ) : (
        msg.texto
      )}
    </div>
  ));
};

export default React.memo(ListaMensajes);
