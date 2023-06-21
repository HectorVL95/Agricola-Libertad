import React from 'react'
import '../styles/Footer.scss'
import smallLogo from '../assets/agricola-lib--small-logo.png'
import telephone from '../assets/telephone-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  let navigate = useNavigate()
  function changeRoute(){
    navigate('/index')
  }

  return (
    <footer>
      <img className='smallLogo' onClick={changeRoute} src={smallLogo} alt="Logo" />
      <p className='texto'>Conecte con un proveedor responsable y eficaz si quiere productos de la mas alta calidad</p>
      <div className='sub-menu'>
        <ul className='ul-title'>
          Compañia
          <li>Acerca de nostros</li>
          <li>Bolsa de trabajo</li>
          <li>Noticias</li>
        </ul>
        <ul className='ul-title'>
          Sutenibilidad
          <li>Programa contra el monoxido de carbono</li>
        </ul>
        <ul className='ul-title'>
          Servicios
          <li>Cotizaciones</li>
          <li>Venta de semillas</li>
          <li>Inscribirse como proveedor</li>
        </ul>
        <ul className='ul-title'>
          Contactenos
          <li>+52 667 199 5759</li>
          <li>Ejido Tierra y Libertad S/Numero, Culiacan, Sinaloa, Mexico C.P. 80001</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;