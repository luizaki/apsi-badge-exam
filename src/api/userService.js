const API_URL = 'https://jsonplaceholder.typicode.com/users';

/** 
 * Fetches all users from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of users.
*/
export const fetchUsers = async () => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
}

/**
 * Adds a new user.
 * @param {string} newUserName - The name of the new user.
 * @returns {Promise<Object>} A promise that resolves to the newly created user.
 */
export const addUser = async (newUserName) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newUserName }),
    });
    if (!res.ok) throw new Error('Failed to add user');
    return res.json();
}

/**
 * Update an existing user's name.
 * @param {number} id - The ID of the user to update.
 * @param {string} updatedName - The new name for the user.
 * @returns {Promise<Object>} A promise that resolves to the updated user.
 */
export const updateUser = async (id, updatedName) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ name: updatedName}),
    });
    if (!res.ok) throw new Error('Failed to update user');
    return res.json();
}

/** 
 * Deletes a user by ID.
 * @param {number} id - The ID of the user to delete.
 * @returns {Promise<void>} A promise that resolves when the user is deleted.
*/
export const deleteUser = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete user');
    return res.json();
}