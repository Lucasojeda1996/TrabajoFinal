import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import './Messege.css'

export default function Messege({ emisor, hora, id, texto, status }) {
  const { handleEliminarMensaje } = useContext(MessagesContext)

  // Aseguramos que el emisor sea interpretado correctamente sin importar el formato
  const isUser = emisor?.toLowerCase() === 'yo'

  return (
    <div className={`chat-message ${isUser ? 'my-message' : 'other-message'}`}>
      <div className="message-content">
        <span>{texto}</span>
        <div className="message-meta">
          <span className="message-hora">{hora}</span>
          {isUser && <span className="message-status">✔✔</span>}
        </div>
      </div>

      {isUser && (
        <button className="delete-button" onClick={() => handleEliminarMensaje(id)}>
          🗑
        </button>
      )}
    </div>
  )
}