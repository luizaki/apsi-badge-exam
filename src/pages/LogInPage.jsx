import { useState } from 'react';
import {useNavigate } from 'react-router-dom';

function LogInPage() {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const navi = useNavigate();

    const login = () => {
        //checking if username & pass exist, not sure what db ang gagamitin 
        // logic here

        if (username && password) {
            //pa uncomment nalang navi to dashboard 
            //navi('/dashboard');
        } else {
            alert('Please fill in the username & password');
        }
    };

    return(
        <div>
            <h1>LOGIN</h1>
            <div className='loginBox'>
            <input placeholder='UserName' onChange={(e)=> setUsername(e.target.value)}/>
            <br />
            <input placeholder='PassWord' onChange={(e)=> setPassword(e.target.value)}/>
            <br />
            <button onClick={login}>LOGIN</button>
            </div>
        </div>
    );
}

export default LogInPage;