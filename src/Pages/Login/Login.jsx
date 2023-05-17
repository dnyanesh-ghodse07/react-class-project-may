import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.scss'
import { ShopContext } from '../../context/shopContext';

const Login = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const { setAuth,auth,isAuthenticated } = useContext(ShopContext);


    console.log(auth);

    const handleLogin = () => { 
        if(!username){
            alert('Please enter your username');
        }else if(!password){
            alert('Please enter your password');
        }else{
            isAuthenticated(username,password);
            if(auth){
                navigate('/cart');
            }else{
                alert('You are not authenticated');
            }
        }
    }

    return (
        <div className='login_container'>
            <div className="login">
                <h1>
                    Login
                </h1>
                <div className="username">
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' placeholder='Enter your username' onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="text" name='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="login-btn">
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>


        </div>
    )
}

export default Login