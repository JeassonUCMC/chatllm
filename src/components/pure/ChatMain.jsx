import React, { useState } from "react";
import IniciarChat from "../forms/IniciarChat.jsx";
import InputChat from "../forms/InputChat.jsx";
import "../../styles/chatmain.styles.css";
import { generarRespuestaLLM } from "../../api/generarRespuestaLLM.js";

const ChatMain = () => {
  const [chatIniciado, setChatIniciado] = useState(false);
  const [formularioData, setFormularioData] = useState(null);
  const [mensajes, setMensajes] = useState([]);

  const manejarInicioChat = async (dataFormulario) => {
    setFormularioData(dataFormulario);

    const respuestaLLM = await generarRespuestaLLM(
      JSON.stringify(dataFormulario)
    );
    console.log(respuestaLLM.response);
    
    // Simula petición al backend
    const respuestaServidor = {
      rol: "asistente",
      texto: respuestaLLM.response,
    };

    setMensajes([
      { rol: "usuario", texto: JSON.stringify(dataFormulario) },
      respuestaServidor,
    ]);

    setChatIniciado(true);
  };

  return (
    <div className="chat-main">
      {!chatIniciado ? (
        <div className="chat-main__inicio">
          <IniciarChat onIniciarChat={manejarInicioChat} />
        </div>
      ) : (
        <div className="chat-main__chat">
          <InputChat mensajes={mensajes} setMensajes={setMensajes} />
        </div>
      )}
    </div>
  );
};

export default ChatMain;
