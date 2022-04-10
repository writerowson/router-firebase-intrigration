import React, { useEffect, useState } from 'react';
import app from '../firebase.init';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const UseFireBase = () => {
    const [user, setUser] = useState({})
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user)
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    return {
        user,
        signInWithGoogle,
        handleSignOut
    }
};

export default UseFireBase;