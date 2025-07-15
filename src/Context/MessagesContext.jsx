import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMessagesByContactId } from "../services/messegesService";

export const MessagesContext = createContext(
    {
        messages: [],
        isMessagesLoading:true,
        addNewMessage: (text) => { },
        handleEliminarMensaje: (id_mensaje) => { },
        loadMessages: (contact_id) => { }
    }
)
const MessagesContextProvider = ({ children }) => {

   // const { contact_id } = useParams()
   // useEffect(() => { console.log('el ID de contacto es: ' + contact_id) }, [contact_id])

    const [messages, setMessages] = useState([])
    const [isMessagesLoading, setIsMessagesLoading ] = useState(true)

    const handleEliminarMensaje = (id_mensaje) => {
        const listaMensajeActualizada = []
        for (const mensaje of messages) {
            if (mensaje.id !== id_mensaje) {
                listaMensajeActualizada.push(mensaje)
            }
        }
        setMessages(listaMensajeActualizada)


    }
    const addNewMessage = (text) => {
        const new_message = { emisor: 'yo', hora: '23:13', texto: text, status: 'No-recibido', id: messages.length + 1 }
        const clon_messages = [...messages]
        clon_messages.push(new_message)
        setMessages(clon_messages)
    }  
    const loadMessages = (contact_id) => {
        setTimeout(
            () => {
                setIsMessagesLoading(true)
                const messages = getMessagesByContactId(contact_id)
                setMessages(messages)
                setIsMessagesLoading(false)
            },
            2000
        )
    
      
      
      
      
       // const messages = getMessagesByContactId(contact_id)
       // setMessages(messages)
    }

    return (
        <MessagesContext.Provider
            value={
                {
                    messages: messages,
                    isMessagesLoading: isMessagesLoading,
                    addNewMessage: addNewMessage,
                    handleEliminarMensaje: handleEliminarMensaje,
                    loadMessages: loadMessages,
                }
            } >
            {children}
        </MessagesContext.Provider>
    )

}

export default MessagesContextProvider