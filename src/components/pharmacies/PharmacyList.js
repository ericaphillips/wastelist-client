import React, { useContext, useEffect } from "react"
import { PharmacyContext } from "./PharmacyProvider"
import { Pharmacy } from "./Pharmacy"
import { UserContext } from "../users/UserProvider"

export const PharmacyList = (props) => {
    const { pharmacies, getPharmacies, addMyPharmacy } = useContext(PharmacyContext)
    const { getUsers, users } = useContext(UserContext)


    // const currentUser = localStorage.getItem("waste_token")

    useEffect(()=>{
        getUsers()
        .then(getPharmacies)
    }, [])

    return (
        <>
        <section className="topOfPage">
            <h1>Pharmacies</h1>
            </section>
                {/* For Pharmacists */}
                <section className="topButton">
                <button className="button--create" onClick={() => {
                    props.history.push(`/pharmacies/addPharmacy`)
                }}>Create a new pharmacy
                </button>
                </section>
                <div className="pharmacy-list">
                    {pharmacies.map(pharmacy => {
                            return <Pharmacy key={pharmacy.id} 
                            pharmacy={pharmacy} props={props} 
                        
                            />
                    })
                    }
                </div>
        </>
    )
}