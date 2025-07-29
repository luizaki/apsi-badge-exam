import { useState } from 'react';
import UserListItem from "./UserListItem";
import "../styles/UserList.css";

/**
 * 
 * @param {Array} users - List of user objects
 * @param {function} onUpdateUser - Callback to update the user
 * @param {function} onDeleteUser - Callback to delete the user
 * @param {boolean} [disabled=false] - A flag whether the list is disabled
 * @returns {JSXElement}
 */

// TODO: Add useEffect here for automatically updating the users array.
// TODO: implement dependency injection to adapt whether we use in-memory db (array), localStorage, etc.

const UserList = ({ users, onUpdateUser, onDeleteUser, disabled = false }) => {

    

    if (users.length === 0) {
        return (
            <div>
                No users found. Add a user to get started!
            </div>
        );
    }

    return (
        <div className='container'>
            { users.map(user => (
                <UserListItem
                    key={user.id}
                    user={user}
                    onUpdate={onUpdateUser}
                    onDelete={onDeleteUser}
                    disabled={disabled}
                />
            ))}
        </div>   
    );
};

export default UserList;