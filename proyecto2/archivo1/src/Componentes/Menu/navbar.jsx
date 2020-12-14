import React from 'react'
import { Component } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
class menu extends Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Supermercado</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className='ml-auto'>
                       <Nav.Link>
                           <Link to ="/">Home</Link>
                       </Nav.Link>
                       <Nav.Link>
                           <Link to ="/Componentes/Login/Login.jsx">Login</Link>
                       </Nav.Link>
                       <Nav.Link>
                           <Link to ="/Componentes/Diccionario">Diccionario</Link>
                       </Nav.Link>
                       <Nav.Link>
                           <Link to ="/Componentes/Traductor"></Link>
                       </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        );
    }
}
export default menu;