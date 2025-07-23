import { useState } from 'react';

const UserForm = ({ onAddUser, disabled = false}) => {
    const [userName, setUserName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userName?.trim()) {
            alert('Please enter a name');
            return;
        }

        setIsSubmitting(true);
        const success = await onAddUser(userName.trim());

        if (success) {
            setUserName('');
        }

        setIsSubmitting(false);
    }

    return (
        // keeping the arbitrary style and structure from the original code.
        <form onSubmit={ handleSubmit } style={{ marginBottom: '20px'}}>
            <input
                type='text'    
                value={ userName }
                placeholder='Enter user name'
                onChange={ (e) => setUserName(e.target.value) }
                disabled={ disabled || isSubmitting }
            />

            <button
                type='submit'
                disabled={ disabled || isSubmitting }
            >
                { isSubmitting ? 'Adding...' : 'Add User' }
            </button>    

        </form>
    );
}

export default UserForm;