import React from "react"
import { Link } from "react-router"
import "./ContactItem.css"

const ContactItem = ({ name, id, last_time_connected, img, last_message, unread_messages }) => {
  return (
    <Link to={`/contacts/${id}/messages`} className="contact-item">
      <div className="contact-content">
        <img src={img} alt={`${name} image profile`} className="contact-avatar" />
        <div className="contact-info">
          <h3 className="contact-name">{name}</h3>
          <div className="contact-last-message">{last_message.text}</div>
          <div className="contact-meta">
            <span className="contact-unread">{unread_messages > 0 ? unread_messages : null}</span>
            <span className="contact-time">Última conexión: {last_time_connected}</span>
          </div>
        </div>
      </div>
      <hr className="contact-divider" />
    </Link>
  )
}

export default ContactItem
