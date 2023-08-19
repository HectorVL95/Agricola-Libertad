import React, {useEffect} from 'react';
import '../styles/Careers.scss'
import Header from './Header';
import Footer from './Footer';
import DataTopBanner from '../DataTopBanner';
import TopBannerNoBtn from './TopBannerNoBtn';
import logo from '../assets/agricola-lib--small-logo.png'
import search from '../assets/search-button-svgrepo-com.svg'
import VideoBackgroundBanner from './VideoBackgroundBanner';

const Careers = () => {

  useEffect(() => {
    // Reset scroll position to top when the component is mounted
    window.scrollTo(0, 0);

    // Attach a visibility change event listener to reset scroll on tab switch
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const DataBanner = DataTopBanner.map((dataEl, index) => {
    const videoBackground = index === 5;

    if (index === 4) {
      return (
        <VideoBackgroundBanner
          dataEl={dataEl}
          key={dataEl.id}
          specialBackground={index === 5}
        />
      );
    } else {
      return (
        <TopBannerNoBtn
          dataEl={dataEl}
          key={dataEl.id}
          specialBackground={index === 5}
          videoBackground={videoBackground}

        />
      );
    }
  });

    function handleSearch(){
    const jobSearch = document.querySelector('.search-bar').value.trim();
    if(jobSearch === ''){
      alert('Lo sentimos, posiciones llenas')
    }else{
      alert('Lo sentimos, posiciones llenas')
    }
  }

  function showSentMessage(){
     const inputs = document.querySelector('.preguntas-input').value.trim()
     if(inputs === "" ){
      alert("Por favor llene los campos indicados");
      return
     }

     const preguntaSection = document.querySelector('.preguntas-contacto')
     preguntaSection.style.display='none'

     const thanksMessage = document.querySelector('.thanks-message')
     thanksMessage.style.display="inline"
  }



  return (
    <main>
      <Header/>
      {DataBanner[5]}
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
        <button onClick={handleSearch} type='button'><img className='search-icon' src={search} alt="Search" /></button>
      </form>
      <p>Lo sentimos, en estos momentos agricola libertad tiene ya todas las pocisiones cubiertas</p>
      </section>
      <section className='preguntas'>
        <article className='preguntas-contacto'>
          <h2>¿Preguntas?</h2>
          <p>Porfavor Contactanos para como podemos beneficiarnos mutuamente</p>
          <form action="text" className='preguntas-forma'>
            <input className='preguntas-input' type="name" placeholder='Nombre'/>
            <input className='preguntas-input' type="email"  placeholder='Email'/>
            <input className='preguntas-input' type="telephone" placeholder='Telefono'/>
            <input className='preguntas-input mensaje' type="text" placeholder='Mensaje'/>
            <button onClick={showSentMessage} type='button' className='boton-envio'>Enviar</button>
          </form>
        </article>
        <article className='thanks-message'>
          <p>Gracias por mandar su mensaje, recibira una respuesta lo mas pronto posible de parte de nuestro equipo de reclutamiento; Si gusta mandar otra pregunta porfavor refresque la pagina.

          Gracias, Bonito Dia!
          </p>
        </article>
      </section>
      <Footer/>
    </main>
  );
}

export default Careers;
