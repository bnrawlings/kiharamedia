import React, { useState }  from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    const [click, setClick] = useState(false); 
    return (
        <>
        <nav className ="navbar">
            <div className="navebar-container">
                <Link to="/" className="navbar-logo">
                    <img src="./images/ Logo1.png" height="50rem" width="50rem"></img>
                </Link>
                <div className='menu-icon'>
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
            </div>
        </nav>

        </>
    )
}

export default NavBar
