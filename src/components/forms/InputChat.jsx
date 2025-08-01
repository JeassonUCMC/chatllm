import React, { useState } from "react";
import "../../styles/inputChat.styles.css";

const InputChat = ({ mensajes, setMensajes }) => {
  const [input, setInput] = useState("");

  const manejarEnvio = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const nuevoMensajeUsuario = { rol: "usuario", texto: input };

    // Simula respuesta del modelo o backend
    const respuesta = {
      rol: "asistente",
      texto: `Gracias por tu mensaje: "${input}". Estoy procesándolo.`,
    };

    setMensajes((prev) => [...prev, nuevoMensajeUsuario, respuesta]);
    setInput("");
  };

  return (
    <div className="input-chat">
      <div className="input-chat__mensajes">
        {mensajes.map((msg, idx) => (
          <div
            key={idx}
            className={`input-chat__mensaje input-chat__mensaje--${msg.rol}`}
          >
            <strong className="input-chat__rol">
              {msg.rol === "usuario" ? "Tú:" : "Asistente:"}
            </strong>{" "}
            {msg.texto}
          </div>
        ))}
      </div>

      <form className="input-chat__form" onSubmit={manejarEnvio}>
        <input
          className="input-chat__input"
          type="text"
          placeholder="Escribe tu mensaje aquí..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="input-chat__submit" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default InputChat;
