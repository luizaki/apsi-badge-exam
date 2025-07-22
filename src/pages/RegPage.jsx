import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

const existingEmails = ['jdoe@student.hau.edu.ph']; //papalit nalang if may db na

function RegPage() {
    const navi = useNavigate();
    const [form, setForm] = useState ({
        name: '',
        studNum: '',
        address: '',
        HauEmail: '',
        password: '',
        confirmPass: '',
    });

    const formChange = (e) => {
        setForm({...form, [e.target.key]: e.target.value});
    };
    const register = () => {
        if(existingEmails.includes(form.email)) {
            alert('HAU Email already has an account.');
        } else if (form.password !== form.confirmPass) {
            alert('Passwords do not match.');
        } else {
            //add user to db, then nav to dashboard
            //navi('/dashboard');
        }
    };

    return(
        <div>
            <h1>REGISTER</h1>
            <div className='registerBox'>
                <input placeholder='Name' key='name' onChange={formChange}/>
                <input placeholder='Student Number' key='studNum' onChange={formChange}/>
                <input placeholder='Address' key='address' onChange={formChange}/>
                <input placeholder='HAU Email' key='HauEmail' onChange={formChange}/>
                <input placeholder='Password' key='password' onChange={formChange}/>
                <input placeholder='Confirm Password' key='confirmPass' onChange={formChange}/>
            </div>
            <div>
                <button onClick={register}>REGISTER</button>
            </div>
        </div>
    );
}

export default RegPage;