import React from 'react';
import {Anchor} from "../Anchor/Anchor";

export const NavBar = () => {
  return (
    <nav className='lista'>
        <ul>
            <li><Anchor content="Home" style="Ancla"/></li>
            <li><Anchor content="About Us" style="Ancla"/></li>
            <li><Anchor content="Contact Us" style="Ancla"/></li>
            <li><Anchor content="FAQ" style="Ancla"/></li>
        </ul>
    </nav>
  )
}
