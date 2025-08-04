export async function generarRespuestaLLM(prompt) {
  const headers = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    model: "llama3.2:3b",
    prompt,
    stream: false,
  });

  try {
    const response = await fetch(
      "https://0x4kt4cc-11434.use2.devtunnels.ms/api/generate",
      {
        method: "POST",
        headers,
        body,
      }
    );

    const data = await response.json(); // Puede ser .json() si el backend responde con JSON
    return data;
  } catch (error) {
    console.error("Error en la solicitud al LLM:", error);
    return null;
  }
}
