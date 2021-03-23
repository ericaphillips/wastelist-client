import React, { useContext, useEffect } from "react"
import { PharmacyContext } from "./PharmacyProvider"
import { Pharmacy } from "./Pharmacy"
import { UserContext } from "../users/UserProvider"

{/* For Customers */}
export const UserPharmacyList = (props) => {
    const { pharmacies, getPharmacies, addMyPharmacy, deleteMyPharmacy } = useContext(PharmacyContext)
    const { getUsers, users } = useContext(UserContext)

    currentUser = localStorage.getItem("waste_token")

    useEffect(()=>{
        getUsers()
        .then(getPharmacies)
    }, [])

    return (
        <>
            <h1>Pharmacies</h1>
                <button onClick={() => {
                    props.history.push(`/pharmacies/addPharmacy`)
                }}>Create a new pharmacy
                </button>
                <div className="column">
                    {pharmacies.map(pharmacy => {
                            return <Pharmacy key={pharmacy.id} 
                            pharmacy={pharmacy} props={props} 
                        
                            />
                    })
                    }
                    {pharmacies.map(pharmacy => {
                        user = users.find(user => user.user.token.key === currentUser)
                        return <p>
						<span onClick={() => {
							addMyPharmacy(pharmacy.id, user.id);
							getUsers();
						}}>{pharmacy.name}
						</span>
                        </p>
                    })}
                </div>
        </>
    )
}