import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink activeClassName='myActive' activeStyle={{ color: "red", backgroundColor: "yellow" }} className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='myActive' activeStyle={{ color: "red", backgroundColor: "yellow" }} className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='myActive' activeStyle={{ color: "red", backgroundColor: "yellow" }} className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='myActive' activeStyle={{ color: "red", backgroundColor: "yellow" }} className="nav-link" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item dropdown">

                            <NavLink activeClassName='myActive' activeStyle={{ color: "red", backgroundColor: "yellow" }}
                                className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" to="/">Hook</NavLink>

                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item"
                                    to="/usestate">UseState</NavLink>
                                <div className="dropdown-divider" />
                                <NavLink className="dropdown-item"
                                    to="/useeffect">UseEffect</NavLink>
                                <div className="dropdown-divider" />
                                <NavLink className="dropdown-item"
                                    to="/commentapp">CommentApp</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">

                            <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" to="/">Axios</NavLink>

                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                                <NavLink className="dropdown-item"
                                    to="/axiosrcc">AxiosClassComp</NavLink>

                                <div className="dropdown-divider" />

                                <NavLink className="dropdown-item"
                                    to="/axiosrfc">AxiosFunctionComp</NavLink>
                                    
                                <div className="dropdown-divider" />

                                <NavLink className="dropdown-item"
                                    to="/axiosware">AxiosMiddleware</NavLink>

                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/hoc">HOC</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        </header>
    )
}
