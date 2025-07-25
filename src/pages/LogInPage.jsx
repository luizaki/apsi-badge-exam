import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../userData.js';

function LogInPage() {
    const[hauEmail, setHauEmail] = useState('');
    const[password, setPassword] = useState('');
    const navi = useNavigate();

    const login = () => {
        const user = users.find((e)=> e.HauEmail === hauEmail && e.password === password);

        if (user) {
            navi('/dashboard');
        } else {
            alert('Please fill in the HAU Email & password');
        }
    };

    return (
        <div>
            <h1>LOGIN</h1>
            <div className='loginBox'>
                <input placeholder='HAU Email' value={hauEmail} onChange={(e)=> setHauEmail(e.target.value)}/>
                <br />
                <input placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <br />
                <button onClick={login}>LOGIN</button>
            </div>
        </div>
    );
}

export default LogInPage;
