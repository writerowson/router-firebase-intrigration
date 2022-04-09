import React from 'react';
import { Link } from 'react-router-dom';
import UseFireBase from '../../Hooks/UseFireBase';
import './Header.css'
const Header = () => {
    const { user, handleSignOut } = UseFireBase()


    return (
        <div className=' header '>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/product">Products</Link>
                <Link to="/register">Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid
                        ?
                        <button onClick={handleSignOut}> sign out</button>
                        :
                        <Link to="/login">LogIn</Link>
                }
            </nav>

        </div>
    );
};

export default Header;