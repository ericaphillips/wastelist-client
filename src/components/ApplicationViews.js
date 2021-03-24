import React from "react";
import { Route } from "react-router-dom";
import { PharmacyForm } from "./pharmacies/PharmacyForm"
import { PharmacyProvider } from "./pharmacies/PharmacyProvider"
import { PharmacyList } from "./pharmacies/PharmacyList"
import { UserProvider } from "./users/UserProvider"
import { UserList } from "./users/UserList"
import { ProfileProvider } from "./auth/ProfileProvider"
import { UserProfile } from "./auth/Profile"

export const ApplicationViews = () => {
    return (
        <>
        <UserProvider>
        <PharmacyProvider>
        <Route exact path="/pharmacies" render={
                props => <>
                <PharmacyList {...props} />
                </>
            } />
        <Route exact path ="/pharmacies/addPharmacy" render={
                props => <PharmacyForm {...props} />
            } />
        <Route path ="/pharmacies/edit/:pharmacyId(\d+)" render={
                props => <PharmacyForm {...props} />
            } />
        </PharmacyProvider>
        </UserProvider>
        <UserProvider>
        <Route exact path="/users" render={
                props => <>
                <UserList {...props} />
                </>
            } />
        </UserProvider>

        <ProfileProvider>
    <Route exact path="/profile">
        <UserProfile />
    </Route>
</ProfileProvider>
        </>
    )
}