import React from 'react';
import UseFireBase from '../../Hooks/UseFireBase';

const LogIn = () => {
    const { signInWithGoogle } = UseFireBase()

    return (
        <div>
            <h3>Plz log in</h3>
            <button onClick={signInWithGoogle}>Google sign In</button> <br />
            <form action="">

                <input type="email" placeholder='your email' /><br />
                <input type="password" placeholder='password' /><br />
                <input type="submit" value='log in' />

            </form>
        </div>
    );
};

export default LogIn;