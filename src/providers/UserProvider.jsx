import { createContext, useContext, useState } from 'react';
import { users as initialUsers } from '../userData.js';

const UserContext = createContext();

export function UserProvider({ children }) {

    const [users, setUsers] = useState([...initialUsers])
    /**
     * 
     * @param {Object} user - A user object
     * @returns {boolean} Success status of the operation
     */
    function addUser(user) {
        try {
            setUsers(current => [...current, user])
            return true;
        } catch (err) {
            console.error('Error creating user:', err);
            return false;
        }
    }

    /**
     * 
     * @param {number} userId - user's ID
     * @param {string} newUserName - user's new username
     * @param {string} newEmail - user's new email
     * @returns {boolean} Success status of the operation
     */
    function updateUser(userId, newUserName, newEmail) {
        try {
            setUsers(current => current.map((user) => 
                user.id === userId 
                    ? {...user, name: newUserName, HauEmail: newEmail} 
                    : user));
            return true;
        } catch (err) {
            alert(err.message);
            return false;
        }
    }

    /**
     * 
     * @param {number} userId - user's ID
     * @returns {boolean} Success status of the operation
     */
    function deleteUser(userId) {
        try {
            setUsers(current => current.filter((user) => user.id !== userId));
            return true;
        } catch (err) {
            alert(err.message);
            return false;
        }
    }

    return (
        <UserContext value={{users, addUser, updateUser, deleteUser}}>
            {children}
        </UserContext>
    )
}

export function useUserContext() {
    return useContext(UserContext);
}