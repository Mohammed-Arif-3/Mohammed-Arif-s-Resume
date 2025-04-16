import Container from 'react-bootstrap/Container';
import {useEffect, useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assests/img/logo.svg';
import navIcon1 from '../assests/img/nav-icon1.svg';
import navIcon2 from '../assests/img/nav-icon2.svg';
import navIcon3 from '../assests/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import{
  BrowserRouter as Router,
}from "react-router-dom";;

export const NavBar =()=> {
  const[activeLink,setActiveLink]=useState('home');
  const[scrolled,seScrolled]=useState(false);
  useEffect(()=>{
    const onScroll =()=>{
        if(window.scrollY>50){
            seScrolled(true);
        }
        else{
            seScrolled(false);
        }
    }
    window.addEventListener("scroll",onScroll);
    return ()=>window.addEventListener("scroll",onScroll);
  },[])
  const onUpdateActiveLink= (value)=>{
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home'? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink ==='skills'? 'active navbar-link': 'navbar-link' } onClick={()=>onUpdateActiveLink('home')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink ==='projects'? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/mohammed-arif-221723228/"><img src={navIcon1} alt="LinkedIn"/></a>
            <a href="https://www.facebook.com/profile.php?id=100011813858489"><img src={navIcon2} alt="FB"/></a>
            <a href="https://www.instagram.com/mohammed_arif_bin_yousuf/"><img src={navIcon3} alt="Instagram"/></a>
           </div>
           <a href="#contact">
           <button className="vvd" onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
           </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
// import React from 'react';