import React, { useContext, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import { Message } from "./Message"
import { UserContext } from "../users/UserProvider"
import './Message.css'

export const MessageList = (props) => {
    const { messages, getMessages } = useContext(MessageContext)
    const { getUsers, users } = useContext(UserContext)


    // const currentUser = localStorage.getItem("waste_token")

    useEffect(()=>{
        getUsers()
        .then(getMessages)
    }, [])

    return (
        <><section className="topOfPage">
            <h1>Your Messages</h1>
                {/* For Pharmacists */}
                </section>
            <section className="topButton">
                <button className="button--create" onClick={() => {
                    props.history.push(`/messages/newMessage`)
                }}>Create a new message
                </button>
                </section>
                <div className="message-man">
                    {messages.map(message => {
                            return <Message key={message.id} 
                            message={message} props={props} 
                        
                            />
                    })
                    }
                </div>
        </>
    )
}