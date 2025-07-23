import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../userData';

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
        const emailExists = users.some((user)=> user.HauEmail === form.HauEmail);
        if(emailExists) {
            alert('HAU Email already has an account.');
        } else if (form.password !== form.confirmPass) {
            alert('Passwords do not match.');
        } else {
            users.push({
                name: form.name,
                studNum: form.studNum,
                address: form.Address,
                HauEmail: form.HauEmail,
                password: form.password,
            });
            alert('USER REGISTERED');
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
