import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //un login con clase de firebase
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
            <img className="login_logo" 
            src="https://logos-marcas.com/wp-content/uploads/2020/04/Amazon-Logo.png" alt="logologin" />
            </Link>

            <div className="login_container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className='login_loginButton'>Sign In</button>
                </form>

                <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
