import React, { useEffect, useRef, useState } from "react";
import "../../styles/inputChat.styles.css";
import MensajeAsistente from "../pure/MensajeAsistente.jsx";
import { generarRespuestaLLM } from "../../api/generarRespuestaLLM.js";
import ListaMensajes from "../pure/ListaMensajes.jsx";

const InputChat = ({ mensajes, setMensajes }) => {
  const finDeMensajesRef = useRef(null);

  const [input, setInput] = useState("");

  const manejarEnvio = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const nuevoMensajeUsuario = { rol: "usuario", texto: input };
    setMensajes((prev) => [...prev, nuevoMensajeUsuario]);
    setInput("");
    const respuestaLLM = await generarRespuestaLLM(input);
    console.log(respuestaLLM.response);

    // Simula respuesta del modelo o backend
    const respuesta = {
      rol: "asistente",
      texto: respuestaLLM.response || "Lo siento, no tengo una respuesta.",
    };

    setMensajes((prev) => [...prev, respuesta]);
  };

  useEffect(() => {
    finDeMensajesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes]);

  return (
    <div className="input-chat">
      <div className="input-chat__mensajes">
        <ListaMensajes mensajes={mensajes} />
        <div ref={finDeMensajesRef} />
      </div>

      <form className="input-chat__form" onSubmit={manejarEnvio}>
        <textarea
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
