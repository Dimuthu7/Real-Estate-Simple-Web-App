import React, { useState } from 'react'
import "./NavBar.css";

const NavBar = () => {

    const onSignOutHandle = () => {
        localStorage.removeItem('user-name');
        localStorage.removeItem('user-email');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top sticky-offset" /*style={{position: "fixed",   top: "0", width: "100%", overflow: "hidden"}}*/>
                <a className="navbar-brand" href="/">FindHome.LK</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={"nav-item"}>
                            <a className="nav-link" href="/buy" >Buy <span className="sr-only">(current)</span></a>
                        </li>
                        <li className={"nav-item"}>
                            <a className="nav-link" href="/sell">Sell</a>
                        </li>
                        {
                            (localStorage.getItem('user-email') !== null) ?
                                <li className={"nav-item"}>
                                    <a className="nav-link" href="/myAd" >My Ad</a>
                                </li>
                                : null
                        }


                    </ul>

                    {(localStorage.getItem('user-name')) !== null ?
                        <span className="navbar-text ml-auto" >
                            <i class="fas fa-user-circle mr-1 ml-2" /> {localStorage.getItem('user-name')} | <a href="/login" onClick={onSignOutHandle}><i class="fas fa-sign-out-alt mr-1 ml-2" />SignOut</a>
                        </span>
                        :
                        <span className="navbar-text ml-auto">
                            <a href="/login"><i class="fas fa-sign-in-alt mr-1 ml-2" /> SignIn</a> | <a href="/register"><i class="fas fa-user-plus mr-1 ml-2" />SignUp</a>
                        </span>
                    }
                </div>
            </nav>
        </>
    )
}

export default NavBar
