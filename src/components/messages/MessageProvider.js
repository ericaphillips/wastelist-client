import React, { useState } from "react"

export const MessageContext = React.createContext()

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState([])

    const getMessages = () => {
        return fetch("http://localhost:8000/messages", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("waste_token")}`     
            }       
        })
            .then(res => res.json())
            .then(setMessages)
    }

    const getMessageById = id => {
        return fetch(`http://localhost:8000/messages/${id}`, {
            "headers": {
                "Authorization": `Token ${localStorage.getItem("waste_token")}`
            }
        })
            .then(res => res.json())
    }

    const addMessage = message => {
        return fetch("http://localhost:8000/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("waste_token")}`  
            },
            body: JSON.stringify(message)
        })
            .then(getMessages)
    }

    const removeMessage = messageId => {
        return fetch(`http://localhost:8000/messages/${messageId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("waste_token")}`  
            },
        })
            .then(getMessages)
    }


    /*
        You return a context provider which has the
        `pharmacies` state and the  function as keys. This
        allows any child elements to access them.
    */
    return (
        <MessageContext.Provider value={{
            messages, message, addMessage, getMessages, getMessageById, removeMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    )
}