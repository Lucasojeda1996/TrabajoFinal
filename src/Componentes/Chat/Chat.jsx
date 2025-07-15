import React, { useContext, useEffect } from 'react'
import Messege from '../Messege/Messege'
import { MessagesContext } from '../../Context/MessagesContext'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import { useParams } from 'react-router'
import "./Chat.css"

export default function Chat() {
  const { messages } = useContext(MessagesContext) 
  const { contact_detail, loadContact } = useContext(ContactDetailContext)
  const { contact_id } = useParams()

 useEffect(() => {
    loadContact(contact_id)
  }, [contact_id])

  if (messages.length === 0) {
    return (
      <div className='empaty-chat'>
        <span>No hay mensajes!</span>
      </div>
    )
  }

  return (
    <div>
      <div className='chat-container'>
        {messages.map((message) => (
          <Messege 
            key={message.id} 
            emisor={message.emisor}
            id={message.id}
            hora={message.hora}
            texto={message.texto}
            status={message.status}
          />
        ))}
      </div>
    </div>
  )
}



