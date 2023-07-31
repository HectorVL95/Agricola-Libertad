import React from 'react';
import '../styles/Careers.scss'
import Header from './Header';
import Footer from './Footer';
import DataTopBanner from '../DataTopBanner';
import TopBannerNoBtn from './TopBannerNoBtn';
import logo from '../assets/agricola-lib--small-logo.png'
import search from '../assets/search-button-svgrepo-com.svg'

const Careers = () => {

  const dataBanner = DataTopBanner.map(dataEl =>{
    return <TopBannerNoBtn
    dataEl={dataEl}
    key={dataEl.id}
    />
  })

  return (
    <main>
      <Header/>
      {dataBanner[4]}
      <section className='disponibilidad'>
        <h1 className='disponibilidad-title'>Mira nuestras posiciones disponibles</h1>
        <article className='posiciones'>
          <img className='posicion-logo' src={logo} alt="Logo" />
          <h2>Bolsa de trabajo en Agricola Libertad</h2>
          <p>Use esta seccion para ver las posiciones abiertas y formar parte de nuestro equipo. Somos un empleador inclusivo, a nosotros nos importa que el empleado tenga las cualidades y experiencias necesarias para llevar a cabo sus tareas; Agricola Libertad no toma en cuenta los niveles de estudio u otros factores socio-economicos.
          </p>
        </article>
      </section>
      <section className='busqueda-posicion'>
        <h2>Posiciones Abiertas</h2>
      <form className='search-form'>
        <input type="search" className='search-bar' placeholder='Buscar Posicion'/>
        <button type='submit'><img className='search-icon' src={search} alt="Search" /></button>
      </form>
      <p>Lo sentimos, en estos momentos agricola libertad tiene ya todas las pocisiones cubiertas</p>
      </section>
      <section className='preguntas'>
        <article className='preguntas-contacto'>
          <h2>¿Preguntas?</h2>
          <p>Porfavor Contactanos para como podemos beneficiarnos mutuamente</p>
          <form action="text" className='preguntas-forma'>
            <input className='preguntas-input' type="text" placeholder='Nombre'/>
            <input className='preguntas-input' type="text"  placeholder='Email'/>
            <input className='preguntas-input' type="text" placeholder='Telefono'/>
            <input className='preguntas-input mensaje' type="text" placeholder='Mensaje'/>
            <button className='boton-envio'>Enviar</button>
          </form>
        </article>
      </section>
      <Footer/>
    </main>
  );
}

export default Careers;