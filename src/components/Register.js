import React,{useState} from "react";
import {useHistory} from 'react-router-dom'


//dummy users

let users=[
    {
        firstName:'Jack',
        lastName:'Denial',
        email:'jack@gmail.com',
        phone:'123456789',
        password:'123&pass',
        userType:'seller'

    },
    {
        firstName:'Sarah',
        lastName:'Win',
        email:'sar@gmail.com',
        phone:'12345609',
        password:'098&pass',
        userType:'buyer'

    }
];
function Register(){
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [userType,setUserType] = useState('buyer');
    const [error,setError] = useState('');
    const history = useHistory();

    const validateForm = () => {
        return (
            firstName.length > 0 &&
            lastName.length > 0 &&
            email.length > 0 &&
            phone.length > 0 &&
            password.length > 0

        );;
    }

    const handleRegister = () =>{
        if(!validateForm()){
            setError('All fields are required');
            return;
        }

        const existingUser = users.find((user) => user.email === email);
        if(existingUser){
            setError('Email is already in use');
        }
        else{
            const newUser = {
                firstName,
                lastName,
                email,
                phone,
                password,
                userType
            };
            users = [...users,newUser];
            setError('');
            console.log('Registered User:',newUser);
            history.push('./login');
        }
    };

    return(
        <div>
            <h2>Register</h2>
            <input 
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}
            />
            <input 
             type="text"
             placeholder="Last Name"
             value={lastName}
             onChange={(e)=> setLastName(e.target.value)}
            />
            <input 
             type="email"
             placeholder="Email"
             value={email}
             onChange={(e)=> setEmail(e.target.value)}
            />
            <input 
             type="text"
             placeholder="Phone"
             value={phone}
             onChange={(e)=> setPhone(e.target.value)}
            />

            <input 
             type="password"
             placeholder="Password"
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
            />

            <select
             value={userType}
             onChange={(e) => setUserType(e.target.value)}
             >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
             </select>
            <button onClick={handleRegister}>Register</button>
            {error && <p style={{ color : 'red' }}>{error}</p>}

        </div>
    );
}

export default Register;
