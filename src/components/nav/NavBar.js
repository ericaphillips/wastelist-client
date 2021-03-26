import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import logo from "../pictures/logo-2.png"

export const NavBar = (props) => {

    // const pharmacy = 

    return (
        <ul className="navbar">
            <div className="navbar__item">
            {/* <img id="logo" alt="Waste List Logo" src={logo} />  */}
            </div>
            <div className="navLeft">
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
                
                </>
                :<>
                {/* For Pharmacists */}
                <button className="navbutton" onClick={() => {
                props.history.push(`/pharmacies/pharmacist?myPharmacy=true`)
                }}>My Pharmacy
                </button>
                <button className="navbutton" onClick={() => {
                props.history.push(`/pharmacies/pharmacyCustomers?myPharmacyCustomers=true`)
                }}>Patient Selector
                </button>
                
                </>
            }
            
            
            <button className="navbutton" onClick={() => {
                props.history.push(`/messages/`)
                }}>Messages
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
                    
            }     </div>   </ul>
    )
}

