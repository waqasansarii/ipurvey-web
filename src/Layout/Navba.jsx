import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/Group 4947.png'
import bar from '../Assets/Group 4111.png'
import './style.css'

const Navbar = () => {
    return (
        <div className='nav_container'>
            <nav className="navbar navbar-expand-lg navbar-light custom_nav">
                <div className="container-fluid">
                    <Link to='/'>
                    <img className='web_logo' src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img className='' src={bar} alt="" />

                    </button>
                    <div className="collapse navbar-collapse nav_ul" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/' >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/blog' >Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about' >About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contact' >Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
