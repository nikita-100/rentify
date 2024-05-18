import React, {useState} from 'react';

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
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');
    const history = useHistory();


    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    };

    const handleLogin = () => {
        if(!validateForm()){
            setError('All fields are required');
            return;
        }
    
        const user = users.find((user) => user.email === email && user.password === password);
        if(user){
            setError('');
            localStorage.setItem('user',JSON.stringify(user));
            if(user.userType === 'seller'){
                history.push('/seller');
            }
            else{
                history.push('/buyer');
            }
        }
        else{
            setError('Invalid email or password');
        }
    };
    return(
        <div>
            <h2>Login</h2>
            <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>

            <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             />
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{ color : 'red' }}>{error}</p>}
        </div>
    )
}

export default Login;