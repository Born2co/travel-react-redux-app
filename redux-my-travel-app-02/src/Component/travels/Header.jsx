import React, { Component } from 'react';
import {  Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
                 <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://fast.com/" className="navbar-brand">React App</a></div>
                    <ul className="navbar-nav">
                    <li><Link className="nav-link" to="/welcome" >Home</Link></li>
                    <li><Link className="nav-link" to="/travels" >Travels</Link></li>
                    <li><Link className="nav-link" to="/addTravel" >Add Travel</Link></li>
                    </ul>
             
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                      <li><Link className="nav-link" to="/domestic" >Domestic</Link></li>
                       <li><Link className="nav-link" to="/international" >International</Link></li>
                    </ul>
                </nav>
            </header>
           
        )
    }
}
export default Header;