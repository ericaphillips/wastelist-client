import React, { useContext } from "react"
import { PharmacyContext } from "./PharmacyProvider"
import { useHistory } from "react-router-dom"
// import './Pharmacy.css'

// component responsible for rendering a single pharmacy

export const Pharmacy = ({ pharmacy }) => {
    const { removePharmacy, addMyPharmacy } = useContext(PharmacyContext)
    const history = useHistory()

    

    return (<section className="pharmacy">
        <h3 className="pharmacy--name">{pharmacy.name}</h3>
        <div className="pharmacy--address">{pharmacy.address}</div>
        <div className="pharmacy--zipcode">{pharmacy.zipcode}</div>
        <div className="pharmacy--appointment_hours">{pharmacy.appointmet_hours}</div>
        <div className="buttons">
            
            {/* For Pharmacists */}
            {
                (localStorage.getItem("pharmacist") === "true")
                ?   <>
            <button className="button--edit" onClick={() => {
                history.push(`/pharmacies/edit/${pharmacy.id}`)
            }}>Edit Pharmacy Listing
            </button>
            
            </>
            : <>
            {/* For Customers */}
            <button onClick={() => {
                            addMyPharmacy(pharmacy.id);
						}}>Add to my list
						</button>
            </>
        }   
        </div>
    </section>
    )
}