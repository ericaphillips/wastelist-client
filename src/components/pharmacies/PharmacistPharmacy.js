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
            <h1>Pharmacies</h1>
                {/* For Pharmacists */}
                <button onClick={() => {
                    props.history.push(`/pharmacies/addPharmacy`)
                }}>Create a new pharmacy
                </button>
                <div className="column">
                    {pharmacy.name} 
                </div>
        </>
    )
}