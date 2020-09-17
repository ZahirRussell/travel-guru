import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo.png'

const TopMenu = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top x-navbar">
        <div class="container">
            <span class="navbar-brand"><img src={Logo} alt="" width="80"></img></span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">                    
                    <span class="nav-link">News</span>                
                </li>
                <li class="nav-item">                    
                    <span class="nav-link">Destination</span>
                </li>
                <li class="nav-item">                    
                    <span class="nav-link">Blog</span>
                </li>
                <li class="nav-item">
                    <span class="nav-link">Contact</span>
                </li>
                <li class="nav-item">                    
                    <Link to="/login"><span class="btn btn-warning nav-link">Login</span></Link>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default TopMenu;