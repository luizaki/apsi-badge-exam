import { useState, useEffect } from 'react';
import * as userService from '../api/userService';

/**
 * Custom hook to manage user state and operations.
 * @returns {Object} An object containing users, loading state, error, and functions to handle user operations.
 */
export const useUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // fetch users on mount
    useEffect( () => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const fetchedUsers = await userService.fetchUsers();
            setUsers(fetchedUsers);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    /**
     * Adds a new user.
     * @param {string} newUserName - The name of the new user.
     * @returns {Promise<boolean>} A promise that resolves to true if the user was added successfully, false otherwise.
     */
    const addUser = async (newUserName) => {
        if (!newUserName?.trim()) {
            setError('User name cannot be empty');
            return false;
        }
        try {
            const newUser = await userService.addUser(newUserName);
            setUsers(prev => [...prev, newUser]);
            return true;
        } catch (err) {
            setError(err.message);
            return false;
        }
    }

    /**
     * Updates an existing user's name.
     * @param {number} id - The ID of the user to update.
     * @param {string} updatedName - The new name for the user.
     * @returns {Promise<boolean>} A promise that resolves to true if the user was updated, otherwise false.
     */
    const updateUser = async (id, updatedName) => {
        if (!updatedName?.trim()) {
            setError('Updated name cannot be empty');
            return false;
        }
        try {
            const newUser = await userService.updateUser(id, updatedName.trim());
            setUsers(prev => prev.map(user => user.id === id ? {...user, name: newUser.name} : user));
            return true;
        } catch (err) {
            setError(err.message);
            return false;
        }
    }

    /**
     * Deletes a user by ID.
     * @param {number} id - The ID of the user to delete.
     * @returns {Promise<boolean>} A promise that resolves to true if the user was deleted, otherwise false.
     */
    const deleteUser = async (id) => {
        try {
            await userService.deleteUser(id);
            setUsers(prev => prev.filter(user => user.id !== id));
            return true;
        } catch (err) {
            setError(err.message);
            return false;
        }
    }

    return {
        // exported state
        users,
        loading,
        error,
        // exported functions
        addUser,
        updateUser,
        deleteUser,
        loadUsers
    }

}

