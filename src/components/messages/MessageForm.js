import React, { useContext, useEffect, useState } from "react";
import { MessageContext } from "./MessageProvider"
import { UserContext } from "../users/UserProvider"
import { Form, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

{/* For All */}
export const MessageForm = (props) => {
    // Context providers for data
    const { messages, addMessage, getMessages } = useContext(MessageContext)
    const { users, getUsers } = useContext(UserContext)

    // Component state
    const [message, setMessage] = useState({})

    //creates variables for data coming in from other tables
    const receiver = parseInt(message.receiver)

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array, create a new one
        and change state instead of modifying the current one
        */
       const newMessage = Object.assign({}, message)
       newMessage[event.target.name] = event.target.value
       setMessage(newMessage)
    }

    // Get pharmacies from API when component initializes
    useEffect(() => {
        getMessages()
        .then(getUsers)
    }, [])

    
    const makeNewMessage = () => {
        addMessage({
                receiver: receiver,
                content: message.content
            })
            .then(() => props.history.push("/messages"))
        }
    

    return (
        <div className="MessageForm">
            <h1 className="MessageForm__title"> New Message</h1>
            <Form >
                <Form.Group controlId="formBasicName">
                    <Form.Label>Message Recipient:</Form.Label>
                    <Form.Control as="select" name="receiver" onChange={handleControlledInputChange} value={message.receiver} placeholder="Name">
                    
                    <option value="0">Name</option>
                       {users.map(user => (
                           <option key={user.id} value={user.id}>
                               {user.user.first_name} {user.user.last_name}
                           </option>
                               ))}

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" name="content" onChange={handleControlledInputChange} value={message.content} placeholder="Message"/>
                </Form.Group>
                {console.log(receiver)}
                <Button className="SaveButton" variant="dark" size="lg" type="submit" 
                onClick={event => {
                event.preventDefault()
                makeNewMessage()
                }}>
                Send
                </Button>
            </Form>

        </div>
    )
}