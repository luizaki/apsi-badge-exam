import { useState } from 'react';
import '../styles/UserListItem.css';

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
    const [editEmail, setEditEmail] = useState(user.HauEmail);

    const handleEdit = () => {
        setIsEditing(true);
        setEditName(user.name);
        setEditEmail(user.HauEmail);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditName(user.name)
        setEditEmail(user.HauEmail);
    };

    const handleSaveEdit = async () => {
        if (!editName?.trim() || !editEmail?.trim() || editName === user.name && editEmail === user.HauEmail) {
            handleCancelEdit();
            return;
        }

        setIsUpdating(true);
        const success = await onUpdate(user.id, editName, editEmail);
        setIsUpdating(false);

        if (success) {
            setIsEditing(false);
        }

    };

    const handleDelete = async () => {
        if (window.confirm(`Are you sure you want to delete "${user.name}?"`)) {
            setIsDeleting(true);
            await onDelete(user.id);
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsDeleting(false);
        }

    };


    const itemDisabled = disabled || isUpdating || isDeleting;

    return (
        <li className='list-item'>
            {isEditing ? (
                <input
                    className='edit-input-field'
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
                <span className='display'>{editName}</span>                
            )}

            {isEditing ? (
                <input 
                    className='edit-input-field'
                    type="email" 
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    disabled={isUpdating}
                    autoFocus
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveEdit();
                        if (e.key === 'Escape') handleCancelEdit(); 
                    }}
                />
            ) : (
                <span className='display'>{editEmail}</span>                
            )}

            <div className='actions'>
                {isEditing ? (
                    <>
                        <button
                            className='btn'
                            onClick={handleSaveEdit}
                            disabled={isUpdating || !editName?.trim()}
                        >
                            {isUpdating ? 'Saving...' : 'Save'}
                        </button>
                        <button
                            className='btn'
                            onClick={handleCancelEdit}
                            disabled={isUpdating}
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        {onUpdate && (
                            <button
                                className='btn'
                                onClick={handleEdit}
                                disabled={itemDisabled}
                            >
                            {/* Change this to a pencil icon */}
                            Edit
                            </button>
                        )}

                        {onDelete && (
                            <button
                                className='btn'
                                onClick={handleDelete}
                                disabled={itemDisabled}
                            >
                                {isDeleting ? 'Deleting...' : 'Delete'}
                            </button>
                        )}

                    </>
                )}
            </div>
        </li>
    )
}

export default UserListItem;