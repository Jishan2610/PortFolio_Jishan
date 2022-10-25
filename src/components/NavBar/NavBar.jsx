import React from "react";
import { slide as Menu } from 'react-burger-menu';
import './NavBar.css';
import { NavLink ,useLocation} from "react-router-dom";


function NavBar(props) {
        const location=useLocation();

        const homeClass = location.pathname === '/' ? 'active-item' : '';
        const aboutClass = location.pathname === '/about' ? 'active-item' : '';
        const projectsClass =
            location.pathname === '/projects' ? 'active-item' : '';
        const skillsClass =
            location.pathname === '/skills' ? 'active-item' : '';
        const contactClass =
            location.pathname === '/contact' ? 'active-item' : '';
  return (
    <Menu {...props}>
        <NavLink to='/'  className={`menu-item ${homeClass} `} >HOME</NavLink>
        <NavLink to='/about'  className={`menu-item ${aboutClass} `}>ABOUT</NavLink>
        <NavLink to='/projects'  className={`menu-item ${projectsClass} `}>PROJECTS</NavLink>
        <NavLink to='/skills'  className={`menu-item ${skillsClass} `}>SKILLS</NavLink>
        <NavLink to='/contact'  className={`menu-item ${contactClass} `}>CONTACT ME</NavLink>
    </Menu>
  )
}

export default NavBar
