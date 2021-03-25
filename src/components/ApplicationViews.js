import React from "react";
import { Route } from "react-router-dom";
import { PharmacyForm } from "./pharmacies/PharmacyForm"
import { PharmacyProvider } from "./pharmacies/PharmacyProvider"
import { PharmacyList } from "./pharmacies/PharmacyList"
import { UserProvider } from "./users/UserProvider"
import { UserList } from "./users/UserList"
import { ProfileProvider } from "./auth/ProfileProvider"
import { UserProfile } from "./auth/Profile"
import { MessageProvider } from "./messages/MessageProvider"
import { PharmacyCustomerList } from "./pharmacies/PharmacyCustomerList"
import { MessageList } from "./messages/MessageList"
import { MessageForm } from "./messages/MessageForm"
import { PharmacistPharmacy } from "./pharmacies/PharmacistPharmacy"

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
        <Route path="/pharmacies/pharmacist" render={
                props => <>
                <PharmacistPharmacy {...props} />
                </>
            } />
        <Route exact path="/pharmacies/pharmacyCustomers" render={
                props => <>
                <PharmacyCustomerList {...props} />
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
        <PharmacyProvider>
        <ProfileProvider>
    <Route exact path="/profile">
        <UserProfile />
    </Route>
</ProfileProvider>
</PharmacyProvider>
            <UserProvider>
            <MessageProvider>
            <Route exact path="/messages" render={
                props => <>
                <MessageList {...props} />
                </>
            } />
            <Route exact path ="/messages/newMessage" render={
                props => <MessageForm {...props} />
            } />
            </MessageProvider>
            </UserProvider>
        </>
    )
}