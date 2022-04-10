import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
const auth = getAuth(app)
const LogIn = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }

    return (
        <div> <h3>Plz log in</h3>
            <button onClick={handleGoogleSignIn}>Google sign In</button> <br />
            <form action="">
                <input type="email" placeholder='your email' /><br />
                <input type="password" placeholder='password' /><br />
                <input type="submit" value='log in' />
            </form>
        </div>
    );
};
export default LogIn;