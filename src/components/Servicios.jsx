import React from 'react'
import '../styles/Servicios.scss'

const Servicios = () => {
  return (
    <section className='Servicios'>
      <h1>Servicios que ofrecemos</h1>
      <div className='vid-wrapper'>
        <iframe className='video-servicios' src="https://www.youtube.com/embed/p8Oq-6WYZBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </section>
  );
}

export default Servicios;