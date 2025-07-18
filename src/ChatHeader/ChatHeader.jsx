import React ,{useContext}from 'react'
import { ContactDetailContext } from '../Context/ContactDetailContext'
import LoaderSpinner from '../Componentes/LoaderSpinner/LoaderSpinner'

 const ChatHeader =() => {
   const {contact_detail,isLoadingContactDetail}= useContext(ContactDetailContext)
  // if(isLoadingContactDetail){
//  return <h2>Cargando...</h2> }
   return (
    <div className='chat-header'>
        <h2>{contact_detail.name}</h2>    
        <img
        src={contact_detail.img}
        alt={`Foto de ${contact_detail.name}`}
        className="chat-header-img"
      />
    </div>
   )
}

export default ChatHeader