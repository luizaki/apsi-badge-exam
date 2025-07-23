import { useState } from 'react';


/**
 * 
 * @param {Object} user - A user object.
 * @param {function} onUpdate - Callback to update a user object.
 * @param {function} onDelete - Callback to delete a user object. 
 * @param {boolean} disabled - A flag whether an element should be disabled. 
 * @returns {JSXElement}
 */
const UserListItem = ({ user, onUpdate, onDelete, disabled = false}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [editName, setEditName] = useState(user.name);

    const handleEdit = () => {
        setIsEditing(true);
        setEditName(user.name)
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditName(user.name)
    };

    const handleSaveEdit = async () => {
        if (!editName?.trim() || editName === user.name) {
            handleCancelEdit();
            return;
        }

        setIsUpdating(true);
        const success = await onUpdate(user.id, editName);
        setIsUpdating(false);

        if (success) {
            setIsEditing(false);
        }

    };

    const handleDelete = async () => {
        if (window.confirm(`Are you sure you want to delete "${user.name}?"`)) {
            setIsDeleting(true);
            await onDelete(user.id);
        }
    };


    const itemDisabled = disabled || isUpdating || isDeleting;

    return (
        <li>
            <strong>[{user.id}]</strong>

            {isEditing ? (
                <input 
                    type="text" 
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    disabled={isUpdating}
                    autoFocus
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveEdit();
                        if (e.key === 'Escape') handleCancelEdit(); 
                    }}
                />
            ) : (
                <span>{user.name}</span>                
            )}

            {isEditing ? (
                <>
                    <button
                        onClick={handleSaveEdit}
                        disabled={isUpdating || !editName?.trim()}
                    >
                        {isUpdating ? 'Saving...' : 'Save'}
                    </button>
                    <button
                        onClick={handleCancelEdit}
                        disabled={isUpdating}
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <button
                        onClick={handleEdit}
                        disabled={itemDisabled}
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        disabled={itemDisabled}
                    >
                        {isDeleting ? 'Deleting...' : 'Delete'}
                    </button>

                </>
            )}
        </li>
    )
}

export default UserListItem;