import React, { useState } from "react";

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
    <div>
      <div
        style={{
          minHeight: "200px",
          border: "1px solid #ccc",
          padding: "1rem",
          marginBottom: "1rem",
        }}
      >
        {mensajes.map((msg, idx) => (
          <div key={idx}>
            <strong>{msg.rol === "usuario" ? "Tú:" : "Asistente:"}</strong>{" "}
            {msg.texto}
          </div>
        ))}
      </div>

      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Escribe tu mensaje aquí..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default InputChat;
