import React, { useState } from "react"

export const PharmacyContext = React.createContext()

export const PharmacyProvider = (props) => {
    const [pharmacies, setPharmacies] = useState([])
    const [pharmacy, setPharmacy] = useState({customers:[]})

    const getPharmacies = () => {
        return fetch("http://localhost:8000/pharmacies", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("waste_token")}`     
            }       
        })
            .then(res => res.json())
            .then(setPharmacies)
    }

    const getPharmacyById = () => {
        return fetch(`http://localhost:8000/pharmacies/pharmacist?myPharmacy=true`, {
            "headers": {
                "Authorization": `Token ${localStorage.getItem("waste_token")}`
            }
        })
            .then(res => res.json())
            .then(setPharmacy)
    }

    const getPharmacyCustomers = () => {
        return fetch(`http://localhost:8000/pharmacies/pharmacyCustomers?myPharmacyCustomers=true`, {
            "headers": {
                "Authorization": `Token ${localStorage.getItem("waste_token")}`
            }
        })
            .then(res => res.json())
            .then(setPharmacy)
    }

    const addPharmacy = pharmacy => {
        //client makes a request
        return fetch("http://localhost:8000/pharmacies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("waste_token")}`  
            },
            body: JSON.stringify(pharmacy)
        })
            .then(getPharmacies)
    }

    const removePharmacy = pharmacyId => {
        return fetch(`http://localhost:8000/pharmacies/${pharmacyId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("waste_token")}`  
            },
        })
            .then(getPharmacies)
    }

    const updatePharmacy = pharmacy => {
        return fetch(`http://localhost:8000/pharmacies/${pharmacy.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("waste_token")}`,  
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pharmacy)
        })
            .then(getPharmacies)
    }


    const addMyPharmacy = (pharmacyId) => {
        return fetch(`http://localhost:8000/pharmacies/${pharmacyId}/modifyCustomers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",        
            "Authorization": `Token ${localStorage.getItem("waste_token")}`
          }
        })
          .then(response => response.json())
      }
    
      const deleteMyPharmacy = (pharmacyId) => {
        return fetch(`http://localhost:8000/pharmacies/${pharmacyId}/modifyCustomers?pharmacyId=${pharmacyId}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Token ${localStorage.getItem("waste_token")}`
          },
        })
        .then(getPharmacies)
      }

    /*
        You return a context provider which has the
        `pharmacies` state and the  function as keys. This
        allows any child elements to access them.
    */
    return (
        <PharmacyContext.Provider value={{
            pharmacies, addPharmacy, getPharmacies, getPharmacyById, removePharmacy, updatePharmacy, addMyPharmacy, deleteMyPharmacy, pharmacy, getPharmacyCustomers
        }}>
            {props.children}
        </PharmacyContext.Provider>
    )
}