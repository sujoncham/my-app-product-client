import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <h1>Logo</h1>
                    </div>
                    <div className="col-md-8">
                   
                        <div>
                            <ul className='nav navbar'>
                                <li>Home</li>
                                <li>About</li>
                                <li>News</li>
                                <li>Cart: <sup>{props.count}</sup> </li>
                                <li>contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;