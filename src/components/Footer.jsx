import React from 'react'
import '../styles/Footer.scss'
import smallLogo from '../assets/agricola-lib--small-logo.png'
import telephone from '../assets/telephone-svgrepo-com.svg'

const Footer = () => {
  return (
    <footer>
      <img className='smallLogo' src={smallLogo} alt="Logo" />
      <p className='texto'>Conecte con un proveedor responsable y eficaz si quiere productos de la mas alta calidad</p>
      <h2 className='title-contact'>Contacto</h2>
      <div className='contact-div'>
      <p className='texto'>Ejido Tierra Libertad S/Numero, Culiacan, Sin 80419</p>
        <div className='tel-div'>
          <img className='telefono' src={telephone} alt="Telephono" />
          <p className='numero-tel'>+52 667 199 9759</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;