import React from 'react'
import '../styles/Footer.scss'
import smallLogo from '../assets/agricola-lib--small-logo.png'
import { useNavigate, Link } from 'react-router-dom'

const Footer = () => {

  let navigate = useNavigate()
  function changeRoute(){
    navigate('/')
  }

  return (
    <footer>
      <img className='smallLogo' onClick={changeRoute} src={smallLogo} alt="Logo" />
      <p className='texto'>Conecte con un proveedor responsable y eficaz si quiere productos de la mas alta calidad</p>
      <div className='sub-menu'>
        <ul className='ul-title'>
          Compañia
          <li>
            <Link to={`/Story`}>
              Acerca de nostros
            </Link>
          </li>
          <li>
            <Link to={`/Careers`}>
              Bolsa de trabajo
            </Link>
            </li>
        </ul>
        <ul className='ul-title'>
          Sutenibilidad
          <li>
            <Link to={`/CarbonFootprint`}>
              Programa contra el monoxido de carbono
            </Link>
          </li>
        </ul>
        <ul className='ul-title'>
          Servicios
          <li>
            <Link to={'/SignUp'}>
              Inscribirse como proveedor
            </Link>
          </li>
        </ul>
        <ul className='ul-title'>
          Contactenos
          <li className='contact-info-li'>+52 667 199 5759</li>
          <li className='contact-info-li'>Ejido Tierra y Libertad S/Numero, Culiacan, Sinaloa, Mexico C.P. 80001</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;