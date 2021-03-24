import React, { useEffect, useContext } from "react"
import { ProfileContext } from "./ProfileProvider.js"


export const UserProfile = () => {
    const { profile, getProfile } = useContext(ProfileContext)

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <article className="profile">
            <header>
                <h1>Your Profile</h1>
            </header>
            <section className="profile__info">
                <header className="profile__header">
                    <h3>Your Info</h3>
                </header>
                <div className="profile__name">
                    Welcome: {profile.user && profile.user.first_name} {profile.user && profile.user.last_name}
                </div>
            </section>
            <section className="profile__registrations">
                <header className="registrations__header">
                    <h3>Your Pharmacies</h3>
                </header>
                <div className="registrations">
                    {
                        profile.pharmacies.map(pharmacy => {
                            return <div key={pharmacy.id} className="registration">
                                <div className="registration__pharmacy">{pharmacy.name}</div>
                                <div>{pharmacy.address}</div>
                                <div>{pharmacy.zipcode}</div>
                                <div>{pharmacy.appointment_hours}</div>
                            </div>
                        })
                    }
                </div>
            </section>
        </article>
    )
}