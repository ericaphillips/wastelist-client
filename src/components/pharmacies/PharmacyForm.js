import React, { useContext, useEffect, useState } from "react";
import { PharmacyContext } from "./PharmacyProvider"
import { Form, Button } from "react-bootstrap"

export const PharmacyForm = (props) => {
    // Context prociders for data
    const { pharmacies, addPharmacy, getPharmacies, updatePharmacy } = useContext(PharmacyContext)

    // Component state
    const [pharmacy, setPharmacy] = useState({})

    // Check if object has "pharmacy_id", if it does it is to be edited and not created
    const toEdit = props.match.params.hasOwnProperty("id")

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array, create a new one
        and change state instead of modifying the current one
        */
       const newPharmacy = Object.assign({}, pharmacy)
       newPharmacy[event.target.name] = event.target.value
       setPharmacy(newPharmacy)
    }

    /* If there is a URL paramter, the user has chosen to edit
    1. Get the value of the URL parameter
    2. Use that id to find the pharmacy
    3. Update component state variable
    */

    const getPharmacyToEdit = () => {
        if(toEdit) {
            const pharmacyId = parseInt(props.match.params.pharmacyId)
            const selectedPharmacy = pharmacies.find(p => p.id === pharmacyId) || {}
            setPharmacy(selectedPharmacy)
        }
    }

    // Get pharmacies from API when component initializes
    useEffect(() => {
        getPharmacies()
    }, [])

    // Once provider state is updated, determine if to edit or new
    useEffect(() => {
        getPharmacyToEdit()
    }, [pharmacies])
    
    const makeNewPharmacy = () => {
        if (toEdit) {
            updatePharmacy({
                id: pharmacy.id,
                name: pharmacy.name,
                address: pharmacy.address,
                zipcode: pharmacy.zipcode,
                appointment_hours: pharmacy.appointment_hours
            })
            .then(() => props.history.push("/pharmacies"))
        } else {
            addPharmacy({
                name: pharmacy.name,
                address: pharmacy.address,
                zipcode: pharmacy.zipcode,
                appointment_hours: pharmacy.appointment_hours
            })
            .then(() => props.history.push("/pharmacies"))
        }
    }

    return (
        <div className="PharmacyForm">
            <h1 className="PharmacyForm__title"> { toEdit ? "Edit Pharmacy Listing" : "Add a Pharmacy"}</h1>
            <Form >
                <Form.Group controlId="formBasicName">
                    <Form.Label>Pharmacy Name</Form.Label>
                    <Form.Control type="name" name="name" onChange={handleControlledInputChange} value={pharmacy.name} placeholder="Name"/>
                </Form.Group>
                <Form.Group controlId="formBasicAddress">
                    <Form.Label>Pharmacy Address</Form.Label>
                    <Form.Control type="address" name="address" onChange={handleControlledInputChange} value={pharmacy.address} placeholder="Address"/>
                </Form.Group>
                <Form.Group controlId="formBasicZipcode">
                    <Form.Label>Pharmacy Zipcode</Form.Label>
                    <Form.Control type="zipcode" name="zipcode" onChange={handleControlledInputChange} value={pharmacy.zipcode} placeholder="Zip"/>
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Pharmacy's Vaccine Appointment Hours</Form.Label>
                    <Form.Control type="appointment_hours" name="appointment_hours" onChange={handleControlledInputChange} value={pharmacy.appointment_hours} placeholder="Appointment Hours"/>
                </Form.Group>
                <Button className="SaveButton" variant="dark" size="lg" type="submit" 
                onClick={event => {
                event.preventDefault()
                makeNewPharmacy()
                }}>
                Submit
                </Button>
            </Form>

        </div>
    )
}