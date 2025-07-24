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

const UserList = ({ users, onUpdateUser, onDeleteUser, disabled = false }) => {
    if (users.length === 0) {
        return (
            <div>
                No users found. Add a user to get started!
            </div>
        );
    }

    return (
        <ul className='user-list'>
            { users.map(user => (
                <UserListItem
                    key={user.id}
                    user={user}
                    onUpdate={onUpdateUser}
                    onDelete={onDeleteUser}
                    disabled={disabled}
                />
            ))}
        </ul>
    );
};

export default UserList;