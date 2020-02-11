import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="topbar">
                <nav className="navbar top-navbar navbar-toggleable-sm navbar-light">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="index.html">
                            <b>
                                <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                            </b>
                            <span>
                                <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                            </span>
                        </a>
                    </div>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav mr-auto mt-md-0 ">
                            <li className="nav-item"> <a href="# "
                                className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"><i className="ti-menu"></i></a> </li>
                            <li className="nav-item hidden-sm-down">
                                <form className="app-search p-l-20">
                                    <input type="text" className="form-control" placeholder="Search for..." />
                                    <a href="# " className="srh-btn"><i className="ti-search"></i></a>
                                </form>
                            </li>
                        </ul>
                        <ul className="navbar-nav my-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="# " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../assets/images/users/1.jpg" alt="user" className="profile-pic m-r-5" />Markarn Doe</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;