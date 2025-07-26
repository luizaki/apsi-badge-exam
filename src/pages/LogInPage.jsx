import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateHash } from '../utils/hash.js';
import { useUserContext } from '../providers/UserProvider.jsx';


function LogInPage() {
    const { users, setIsAuthenticated } = useUserContext();
    const[hauEmail, setHauEmail] = useState('');
    const[password, setPassword] = useState('');
    const navi = useNavigate();

    const login = async () =>  {
        const hashedPassword = await generateHash('654321');
        console.log(hashedPassword);

        const user = users.find((user)=> user.HauEmail === hauEmail && user.password === hashedPassword);

        // Ideally, protected routes are achieved through backend stuff
        // but since we don't have that, this will have to do.
        if (user) {
            setIsAuthenticated(true);
            navi('/dashboard');
        } else {
            setIsAuthenticated(false);
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
