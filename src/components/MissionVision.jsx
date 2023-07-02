import React from 'react';
import family from '../assets/family-agriculture.jpeg';
import '../styles/MissionVision.scss'
import Header from './Header';
import Footer from './Footer';

const MissionVision = () => {
  return (
    <main>
      <Header/>
      <section className='Mission-Vision'>
        <img className='family-pic' src={family} alt="" />
        <div className='mission divs'>
          <h1>Mision</h1>
          <p>Agricola libertad es una empresa familiar, somo productos de primera de maiz y proveemos la mas alta calidad de servicio al cleinte, educacion y valores, todo esto con el esfuerso de reforzar a nuestros clienttes, compañia y comunidad agricola. Ponemos todo el esfuerzo y las ganas para satisfacer las necesidades y demanda del consumidor final</p>
        </div>
        <div className='vision divs'>
          <h1>Vision</h1>
          <p>Nuestra vision en agricola libertad es ser la agricola de mais preferida del noroeste, asi como dar ejemplo y elevar el modo de compañias que son administradas por familia, esto dando un excelente valor al cliente, satisfacer necesidades y mantener un capital humano dedicado, talentoso y sobre todo que podamos contar con ellos.</p>
        </div>
        <div className='values divs'>
          <h1>Valores</h1>
          <p>En Agricola libertad, nuestros valores son demostrados atraves de nuestros socios y aquel exito que hemos compartido con ellos:</p>
          <div className='list'>
            <ul className='values-unordered-list'>
              <li className='list-item item-1'>Trabajamos con respeto y dignidad para nuestros clientes, empleados y asociados</li>
              <li className='list-item'>Mantenemos una relacion abierta y honesta con todos los involucrados en nuestra compañia</li>
              <li className='list-item'>Tenemos la iniciativa para ir por el desarrollo personal y aprendizaje</li>
              <li className='list-item'>Proveemos informacion exacta y accesible</li>
              <li className='list-item'>Tenemos la responsabilidad por otros, nuestras tierras y comunidades </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}

export default MissionVision;