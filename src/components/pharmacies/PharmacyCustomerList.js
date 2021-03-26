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
        <><section className="topOfPage">
            <h1>Pharmacies</h1>
            </section>
                {/* For Pharmacists */}
                <section className="topButton">
                <button className="button--create" onClick={() => {
                    props.history.push(`/pharmacies/addPharmacy`)
                }}>Create a new pharmacy
                </button>
                </section>
                <div className="pharmacy">
                    {pharmacy.customers.map(c =>
                        <div className="customer">
                        <div className="customer-name">{c.user.first_name} {c.user.last_name}</div>
                        <div className="customer-phone">{c.phone}</div>
                        </div>
                    )}
                </div>
        </>
    )
}