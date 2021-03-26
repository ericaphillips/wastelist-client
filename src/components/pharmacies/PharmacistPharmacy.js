import React, { useContext, useEffect } from "react"
import { PharmacyContext } from "./PharmacyProvider"
import { Pharmacy } from "./Pharmacy"


export const PharmacistPharmacy = (props) => {
    const { pharmacy, getPharmacyById } = useContext(PharmacyContext)


    useEffect(()=>{
        getPharmacyById()
    }, [])

    return (
        <>
            <section className="topOfPage">
            <h1>My Pharmacy</h1>
            </section>
                {/* For Pharmacists */}
                <section className="topButton">
                <button className="button--create" onClick={() => {
                    props.history.push(`/pharmacies/addPharmacy`)
                }}>Create a new pharmacy
                </button>
                </section>
        <section className="pharmacy">
                <div className="column">
                <h3 className="pharmacy--name">{pharmacy.name}</h3>
            <div className="pharmacy--address">{pharmacy.address}</div>
            <div className="pharmacy--zipcode">{pharmacy.zipcode}</div>
            <div className="pharmacy--appointment_hours">{pharmacy.appointmet_hours}</div>
                </div>
                </section>
        </>
    )
}