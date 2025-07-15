import React, { useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import './NewMessageForm.css'
import { IoSend } from 'react-icons/io5'


export default function NewMessageForm() {
  const { addNewMessage } = useContext(MessagesContext)

  const handleSubmitNewMessage = (e) => {
    e.preventDefault()
    const newText = e.target.text.value.trim()
    if (newText.length < 1) return
    addNewMessage(newText)
    e.target.reset()
  }

  return (
    <form className="message-form" onSubmit={handleSubmitNewMessage}>
      <textarea
        id="text"
        name="text"
        minLength={1}
        required
        placeholder="Escribí un mensaje"
        className="message-input"
        rows={1}
      />
      <button type="submit" className="send-button">
         <IoSend size={20} />
      </button>
    </form>
  )
}




























