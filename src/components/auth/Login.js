import React from "react"
import { Link } from "react-router-dom"
import "./auth.css"
import { Form, Button } from "react-bootstrap"
import logo from "../pictures/logo.png"

export const Login = props => {
    const email = React.createRef()
    const password = React.createRef()
    const invalidDialog = React.createRef()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem( "waste_token", res.token )
                    localStorage.setItem("pharmacist", res.pharmacist)
                    props.history.push("/pharmacies")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Waste List</h1>
                    
                    <h2>Please sign in</h2>
                    <div>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" id="email" className="form-control"  placeholder="Email address" required autoFocus />
                    </div>
                    <div>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control"  placeholder="Password" required />
                    </div>
                    <div style={{
                        textAlign:"center"
                    }}>
                        <button className="button-login" type="submit">Sign In</button>
                    </div>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}