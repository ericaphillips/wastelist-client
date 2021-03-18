import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { User } from "./User"

export const UserList = (props) => {
    const { users, getUsers } = useContext(UserContext)
    // const userId =  parseInt(localStorage.getItem("app_user_id"))
    useEffect(()=>{
        getUsers()
    }, [])

    return (
        <>
            <div className="row">
            <h1>Users</h1>
                <div className="column">
                    {users
                    
                    .map(user => {
                            return <User key={user.id} 
                            user={user} props={props} 
                        
                            />
                    })
                    }
                </div>
            </div>
        </>
    )
}