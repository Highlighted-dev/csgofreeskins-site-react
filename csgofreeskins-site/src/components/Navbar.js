import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    const sidebarData = [
        {
            title: 'Home',
            path: '/',
            icon: <AiIcons.AiFillHome />,
            clName: 'nav-text'
        },
        {
            title: 'About',
            path: '/about',
            icon: <AiIcons.AiFillQuestionCircle />,
            clName: 'nav-text'
        },
        {
            title: 'Advertise',
            path: '/advertise',
            icon: <FaIcons.FaCartPlus />,
            clName: 'nav-text'
        }
    ]

    return (
        <>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} style={{color:'#4FFF6C'}} />
          </Link>
          <h3>CSGOFREESKINS.NET</h3>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose style={{color:'#4FFF6C'}} />
              </Link>
            </li>
            {sidebarData.map((item, index) => {
              return (
                <li key={index} className={item.clName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        </>
    )
}

export default Navbar
