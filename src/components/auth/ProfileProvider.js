import React, { useState } from "react"

export const ProfileContext = React.createContext()

export const ProfileProvider = (props) => {
    /*
        Must give default value for the `pharmacies` property
        so that React doesn't error when you try to
        iterate the pharmacies array in the view.
    */
    const [profile, setProfile] = useState({pharmacies:[]})

    const getProfile = () => {
        return fetch("http://localhost:8000/profile", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("waste_token")}`
            }
        })
            .then(response => response.json())
            .then(setProfile)
    }

    return (
        <ProfileContext.Provider value={{ profile, getProfile }}>
            {props.children}
        </ProfileContext.Provider>
    )
}