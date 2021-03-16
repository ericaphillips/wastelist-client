import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
// import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const WasteList = (props) => (
    <>
        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
    </>
)