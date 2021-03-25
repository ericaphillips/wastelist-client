import React, { useContext, useEffect } from "react"
import { PharmacyContext } from "./PharmacyProvider"
import { Pharmacy } from "./Pharmacy"
import { UserContext } from "../users/UserProvider"

export const PharmacyCustomerList = (props) => {
    const { pharmacy, getPharmacyCustomers} = useContext(PharmacyContext)
    const { getUsers, users } = useContext(UserContext)
    
    // const [users, setUsers] = useState({customers:{user:{}}})


    // const currentUser = localStorage.getItem("waste_token")

    useEffect(()=>{
        getUsers()
        .then(getPharmacyCustomers)
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
                    {pharmacy.customers.map(c =>
                        <p>{c.user.first_name}</p>

                    )}
                </div>
        </>
    )
}