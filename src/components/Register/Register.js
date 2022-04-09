import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Plz register </h3>
            <form action="">
                <input type="text" placeholder='your name' /><br />
                <input type="email" placeholder='Your email' /><br />
                <input type="password" placeholder='password' /><br />
                <input type="submit" value='register' />
            </form>
        </div>
    );
};

export default Register;