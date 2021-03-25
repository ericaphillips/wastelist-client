import React, { useContext } from "react"
import { MessageContext } from "./MessageProvider"
import { UserContext } from "../users/UserProvider"
import { useHistory } from "react-router-dom"
// import './Pharmacy.css'

// component responsible for rendering a single message

export const Message = ({ message }) => {
    const { addMessage } = useContext(MessageContext)
    const history = useHistory()

    // const confirmDelete = (id) => {
    //     const d = window.confirm("Would you like to delete this?")
    //     if (d === true) {
    //         removeMessage(id)
    //     }
    // }

    return (<section className="message">
        <div className="message--sender">From: {message.sender.user.first_name} {message.sender.user.last_name}</div>
        <div className="message--content">{message.content}</div>
        
       
    </section>
    )
}