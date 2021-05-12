import React from "react";
import { Nav, Form, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import reactDom from "react-dom";
import { Link, NavLink } from 'react-router-dom'



export const Navbarak = ({ user }) => {

    return (
        <>
            <Navbar bg="" variant="" className="navbar">
                <Nav className="container-fluid">
                    <Nav.Item>
                        <Link to="/" className="navbar-brand" >Home</Link>
                    </Nav.Item>

                    {!user &&
                        <Nav className="justify-content-end">
                            <Nav.Item>
                                <NavLink to="/registran" className="nav-item nav-link" >registran</NavLink>
                            </Nav.Item>

                            <Nav.Item>
                                <NavLink to="/Login" className="nav-item nav-link" >Login</NavLink>
                            </Nav.Item>
                        </Nav>
                    }

                    {user &&
                        <>
                            <p className="text-center">welcome back, {user.name}</p>
                            <Nav className="justify-content-end">
                                {user.role === 1 &&

                                    <Nav.Item className="ml-auto" >
                                        <NavLink to="/reports" className="nav-item nav-link" >reports</NavLink>
                                    </Nav.Item>

                                }
                                <Nav.Item className="ml-auto" >
                                    <NavLink to="/logout" className="nav-item nav-link" >Logout</NavLink>
                                </Nav.Item>
                            </Nav>
                        </>
                    }

                </Nav>
            </Navbar>
        </>

    );
};

export default Navbarak;

