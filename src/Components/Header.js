import React from 'react';
import './Header.css'

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/21SEo9itttL.jpg" />
                </a>
            </div>
            <div className="header--user">
            <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="usuário" />
                </a>
            </div>
        </header>
    );
}