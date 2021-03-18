import React, { useContext, useEffect } from "react"
import { PharmacyContext } from "../pharmacies/PharmacyProvider"
import { Pharmacy } from "./Pharmacy"

export const PharmacyList = (props) => {
    const { pharmacies, getPharmacies } = useContext(PharmacyContext)
    // const userId =  parseInt(localStorage.getItem("app_user_id"))
    useEffect(()=>{
        getPharmacies()
    }, [])

    return (
        <>
            <div className="row">
            <h1>Pharmacies</h1>
                <button onClick={() => {
                    props.history.push(`/pharmacies/addPharmacy`)
                }}>Create a new pharmacy
                </button>
                <div className="column">
                    {pharmacies
                    // .filter(c => c.userId === userId)
                    .map(pharmacy => {
                            return <Pharmacy key={pharmacy.id} 
                            category={pharmacy} props={props} 
                        
                            />
                    })
                    }
                </div>
            </div>
        </>
    )
}