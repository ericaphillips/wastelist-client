import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {


    return (
        <ul className="navbar">
            <div className="navbar__item">
                {/* <img className="navbar__logo" src={Logo} /> */}
            </div>
            {/* uncomment this if you want links instead of buttons */}
            {/* <li className="nav-item">
                <Link className="nav-link" to="/posts">Posts</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/posts/create">New Posts</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/myposts">My Posts</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/tags">Tag Management</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/profile">Profiles</Link>
            </li> */}
            <button className="navbutton" onClick={() => {
                props.history.push(`/pharmacies`)
            }}>All Pharmacies
            </button>
            <button className="navbutton" onClick={() => {
                props.history.push(`/mypharmacies`)
            }}>My Pharmacies
            </button>
            {
                (localStorage.getItem("waste_token") !== null) ?
                    <button className="navbutton"
                        onClick={() => {
                            localStorage.removeItem("waste_token")
                            props.history.push({ pathname: "/" })
                        }}
                    >Logout</button> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}

