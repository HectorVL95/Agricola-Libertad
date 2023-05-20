import React from 'react'
import '../styles/Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <ul className='unordered-list'>
        <li>Galeria</li>
        <li>Mision y Vision</li>
        <li>Nuestro Equipo</li>
        <li>Historia</li>
      </ul>
    </nav>
  );
}

export default Navbar;