import React, { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContext'
import ContactsList from '../../Componentes/ContactList/ContactList'
import './ContactScreen.css'

export default function ContactScreen() {
  const { contacts } = useContext(ContactContext)

  return (
    <div className='contact-screen'>
      <header className="contact-header">
        <h1 className="contact-title">Chats</h1>
        
      </header>
      <div>
        <ContactsList />
      </div>
    </div>
  )
}

