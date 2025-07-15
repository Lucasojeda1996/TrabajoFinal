import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import LoaderSpinner from '../../Componentes/LoaderSpinner/LoaderSpinner'
import "./ContacDetailScreen.css"
import { Link } from 'react-router'

export default function ContactDetailScreen() {
    const { contact_id } = useParams()
    const { loadContact, contact_detail, isLoadingContactDetail } = useContext(ContactDetailContext)
    useEffect(
        () => {
            loadContact(contact_id)
        },
        [contact_id]

    )

    if (isLoadingContactDetail) {
        return <LoaderSpinner />
    }
    return (
        <div className="contact-container">
          
           <Link to={`/contacts/${contact_id}/messages`}
             className="btn-back">
                ← Volver
            </Link>
          
            <img
                src={contact_detail.img}
                alt={`Foto de ${contact_detail.name}`}
                className="contact-avatar"
            />
            <h1 className="contact-name">{contact_detail.name}</h1>
            <p className="contact-status">
                Última conexión: {contact_detail.last_time_connected}
            </p>

            <div className="contact-actions">
                <button className="btn btn-message">Enviar mensaje</button>
                <button className="btn btn-call">Llamar</button>
                <button className="btn btn-block">Bloquear contacto</button>
            </div>
        </div>
    )
        
}



