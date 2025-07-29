import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateHash } from '../utils/hash.js';
import { useUserContext } from '../providers/UserProvider.jsx';

function LogInPage() {
    const { users, setIsAuthenticated } = useUserContext();
    const [hauEmail, setHauEmail] = useState('');
    const [password, setPassword] = useState('');
    const navi = useNavigate();

    const login = async () => {
        const hashedPassword = await generateHash(password);
        const user = users.find(
        (user) => user.HauEmail === hauEmail && user.password === hashedPassword
        );

        // Ideally, protected routes are achieved through backend stuff
        // but since we don't have that, this will have to do.
        if (hauEmail === '' || password === '') {
            alert('Please fill in the HAU email & password');
        } else {
            if (user) {
                setIsAuthenticated(true);
                navi('/dashboard');
            } else {
                setIsAuthenticated(false);
                alert('Please make sure HAU email & password is correct');
            }
        }
    };

    return (
        <div className="centered-container">
        <div className="form-container">
            <h1 style={{ textAlign: 'center' }}>LOGIN</h1>
            <input
            type="email"
            placeholder="HAU Email"
            value={hauEmail}
            onChange={(e) => setHauEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login}>LOGIN</button>
        </div>
        </div>
    );
}

export default LogInPage;