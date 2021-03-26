import React, { useEffect, useContext } from "react"
import { ProfileContext } from "./ProfileProvider.js"
import { PharmacyContext } from "../pharmacies/PharmacyProvider"
import { useHistory } from "react-router-dom"


export const UserProfile = () => {
    const { profile, getProfile } = useContext(ProfileContext)
    const { deleteMyPharmacy } = useContext(PharmacyContext)
    const history = useHistory()

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <article className="profile">
            <header>
                <h1>Welcome: {profile.user && profile.user.first_name} {profile.user && profile.user.last_name}</h1>
            </header>
            <section className="profile__info">
                
                <div className="profile__name">
                    
                </div>
            </section>
            <section className="profile__registrations">
                <header className="registrations__header">
                    <h3>Your Pharmacies</h3>
                </header>
                <div className="prof">
                    {
                        profile.pharmacies.map(pharmacy => {
                            return <div key={pharmacy.id} className="registrations">
                                <div className="registration">
                                <div className="registration__pharmacy">{pharmacy.name}</div>
                                <div>{pharmacy.address}</div>
                                <div>{pharmacy.zipcode}</div>
                                <div>{pharmacy.appointment_hours}</div>
                                <div>
                                <button className="button--remove" onClick={() => {
                                    history.push(`/pharmacies`)
                            deleteMyPharmacy(pharmacy.id);
						}}>Remove from my list
						</button>
                        </div>
                                    </div>
                            </div>
                        })
                    }
                </div>
            </section>
        </article>
    )
}