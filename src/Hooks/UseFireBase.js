import React, { useState } from 'react';
import app from '../firebase.init';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const UseFireBase = () => {
    const [user, setUser] = useState({})
    const signInWithGoogle = () => {
        console.log('sign up');
    }
    return {
        user, signInWithGoogle
    }
};

export default UseFireBase;