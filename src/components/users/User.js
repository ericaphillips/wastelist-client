import React, { useContext } from "react"
import { UserContext } from "./UserProvider"
import { useHistory } from "react-router-dom"
// import './User.css'

// component responsible for rendering a single user

export const User = ({ user }) => {
    const history = useHistory()

    return (<section className="user">
        <h3 className="user--name">{user.user.first_name} {user.user.last_name}</h3>
        <div className="user--phone">{user.phone}</div>
        <div className="user--zip">{user.zipcode}</div>
        {/* <div className="user--pharmacy">{user.pharmacy.name}</div> */}
    </section>
    )
}