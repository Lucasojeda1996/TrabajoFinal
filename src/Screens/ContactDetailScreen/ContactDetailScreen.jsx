import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import LoaderSpinner from '../../Componentes/LoaderSpinner/LoaderSpinner'


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


        <div>


            <img
                src={contact_detail.img}
                alt={`Foto de ${contact_detail.name}`}
                className="chat-header-img"
            />
            <h1 className="contact-detail-name">{contact_detail.name}</h1>
            <p className="contact-detail-status">Última conexión: {contact_detail.last_time_connected}</p>
        </div>
    )
}

