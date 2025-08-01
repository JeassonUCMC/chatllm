// ChatMain.jsx
import React, { useState } from "react";
import IniciarChat from "../forms/IniciarChat.jsx";
import InputChat from "../forms/InputChat.jsx";

const ChatMain = () => {
  const [chatIniciado, setChatIniciado] = useState(false);
  const [formularioData, setFormularioData] = useState(null);
  const [mensajes, setMensajes] = useState([]);

  const manejarInicioChat = async (dataFormulario) => {
    setFormularioData(dataFormulario);

    // Simula petición al backend
    const respuestaServidor = {
      rol: "asistente",
      texto: `Hola, estás consultando sobre ${dataFormulario.temaSubtema} en la materia ${dataFormulario.materia}. ¿En qué puedo ayudarte?`,
    };

    setMensajes([
      { rol: "usuario", texto: JSON.stringify(dataFormulario) },
      respuestaServidor,
    ]);

    setChatIniciado(true);
  };

  return (
    <div>
      {!chatIniciado ? (
        <IniciarChat onIniciarChat={manejarInicioChat} />
      ) : (
        <InputChat mensajes={mensajes} setMensajes={setMensajes} />
      )}
    </div>
  );
};

export default ChatMain;
