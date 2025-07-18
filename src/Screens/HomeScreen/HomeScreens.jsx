import React, { useContext } from 'react'
import Chat from '../../Componentes/Chat/Chat'
import NewMessageForm from '../../Componentes/NewMessageForm/NewMessegeForm'
import { Link, useParams } from 'react-router'
import { MessagesContext } from '../../Context/MessagesContext'
import { useEffect } from 'react'
import LoaderSpinner from '../../Componentes/LoaderSpinner/LoaderSpinner'
import './HomeScreens.css'

import { ContactDetailContext } from '../../Context/ContactDetailContext'



//esta es la pantalla del chat

export default function HomeScreens() {
  const { contact_id } = useParams()
  //console.log(contact_id)
  const { loadMessages, isMessagesLoading } = useContext(MessagesContext)
  useEffect(() => { loadMessages(contact_id) }, [contact_id])
  if (isMessagesLoading) {
   return <LoaderSpinner /> }
  return (
    <div className="home-container">
      <header className='Header-Chat'>
    <Link to="/contacts" className="link-Volver">← Volver</Link>
    <span>Contacto: <ChatHeader/></span>
    <Link to={`/contacts/${contact_id}/detail`} className="link-detalle">Informacion</Link>
      </header>

      <div className="chat-container">
        <Chat />
      </div>
      <div className="message-form">
        <NewMessageForm />
      </div>
    </div>
  )
}



const ChatHeader = () => {
  const { contact_detail } = useContext(ContactDetailContext);

  if (!contact_detail) {
    return (
      <div className="chat-header">
        <h2>Selecciona un chat</h2>
      </div>
    );
  }

  return (
    <div className="chat-header">
      <h2>{contact_detail.name}</h2>
      <img
        src={contact_detail.img}
        alt={`Foto de ${contact_detail.name}`}
        className="chat-header-img"
      />
    </div>
  );
};