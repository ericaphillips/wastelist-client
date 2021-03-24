import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {


    return (
        <ul className="navbar">
            <div className="navbar__item">
                {/* <img className="navbar__logo" src={Logo} /> */}
            </div>
            {/* For Customers */}
            {
                (localStorage.getItem("pharmacist") === "false")
                ?   <>
                <button className="navbutton" onClick={() => {
                props.history.push(`/pharmacies`)
                }}>All Pharmacies
                </button>
                <button className="navbutton" onClick={() => {
                props.history.push(`/profile`)
                }}>My Pharmacies
                </button>
                <button className="navbutton" onClick={() => {
                props.history.push(`/myappointments`)
                }}>My Appointments
                </button>
                </>
                :<>
                {/* For Pharmacists */}
                <button className="navbutton" onClick={() => {
                props.history.push(`/mypharmacy`)
                }}>My Pharmacy
                </button>
                <button className="navbutton" onClick={() => {
                props.history.push(`/patients`)
                }}>Patient Selector
                </button>
                <button className="navbutton" onClick={() => {
                props.history.push(`/appointments`)
                }}>Appointments
                </button>
                </>
            }
            
            
            
            
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

