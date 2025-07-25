import { useState, useReducer } from 'react';
import { users } from '../userData.js'
import { generateHash } from '../utils/hash.js';
import '../styles/UserForm.css';
import { useUserContext } from '../providers/UserProvider.jsx';

const ACTIONS = {
    SET_NAME: 'SET_NAME',
    SET_STUD_NUM: 'SET_STUD_NUM',
    SET_EMAIL: 'SET_EMAIL',
    SET_PASSWORD: 'SET_PASSWORD',
    RESET: 'RESET'
}

const UserForm = () => {

    const {addUser, users} = useUserContext();

    const initialState = {
        id: users.length + 1,
        name: '',
        studNum: '',
        HauEmail: '',
        password: ''
    }

    function reducer(state, action) {
        switch(action.type) {
            case ACTIONS.SET_NAME:
                return {...state, name: action.payload };
            case ACTIONS.SET_STUD_NUM:
                return {...state, studNum: action.payload };
            case ACTIONS.SET_EMAIL:
                return {...state, HauEmail: action.payload };
            case ACTIONS.SET_PASSWORD:
                return {...state, password: action.payload };
            case ACTIONS.RESET:
                return initialState;
            default:
                return state;
        }
    }

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [user, dispatch] = useReducer(reducer, initialState);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emptyFields = Object.values(user).some(field => typeof(field) === String && !field.trim());

        if (emptyFields) {
            alert('Please fill out all fields.');
            return;
        }

        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        const hashedPassword = await generateHash(user.password);
        
        const newUser = {
            ...user,
            password: hashedPassword
        }

        try {
            const success = addUser(newUser);

            if (success) {
                setIsSuccess(true);
                dispatch({ type: ACTIONS.RESET });
            } else {
                throw new Error('Failed to create user');
            }

            console.log(users);
        } catch (err) {
            setIsSuccess(false);
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }

    }

    return (
        <>  
            <form onSubmit={ handleSubmit } className='user-form'>
                <input
                    className='input-field'
                    type='text'    
                    value={ user.name }
                    placeholder='Enter user name'
                    onChange={ (e) => dispatch({type: ACTIONS.SET_NAME, payload: e.target.value}) }
                    disabled={ isSubmitting }
                />

                <input
                    className='input-field'
                    type='text'    
                    value={ user.studNum }
                    placeholder='Enter student number'
                    onChange={ (e) => dispatch({type: ACTIONS.SET_STUD_NUM, payload: e.target.value}) }
                    disabled={ isSubmitting }
                />

                <input
                    className='input-field'
                    type='email'    
                    value={ user.HauEmail }
                    placeholder='Enter email'
                    onChange={ (e) => dispatch({type: ACTIONS.SET_EMAIL, payload: e.target.value}) }
                    disabled={ isSubmitting }
                />

                <input
                    className='input-field'
                    type='password'    
                    value={ user.password }
                    placeholder='Enter password'
                    onChange={ (e) => dispatch({type: ACTIONS.SET_PASSWORD, payload: e.target.value}) }
                    disabled={ isSubmitting }
                />

                <button
                    type='submit'
                    disabled={ isSubmitting }
                >
                    { isSubmitting ? 'Adding...' : 'Add User' }
                </button>

                { isSuccess && 
                (<dialog open className='dialog'>
                    <h2>User added successfully!</h2>
                    <button className='dialog-btn success' type='button' onClick={() => setIsSuccess(false) }>Ok</button>
                </dialog>) }

                { error &&
                (<dialog open className='dialog'>
                    <h2>{ error }</h2>
                    <button className='dialog-btn failure' type='button' onClick={() => setError('')}>Ok</button>
                </dialog>) 
                }

            </form>
        </>
    );
}

export default UserForm;