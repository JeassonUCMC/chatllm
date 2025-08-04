import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // Puedes cambiar el tema
import "../../styles/mensajeAsistente.styles.css";
import remarkGfm from "remark-gfm";
import React from "react";

const MensajeAsistente = ({ contenido }) => {
  return (
    <div className="mensaje-asistente">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {contenido}
      </ReactMarkdown>
    </div>
  );
};
export default React.memo(MensajeAsistente);
