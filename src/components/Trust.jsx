import React from 'react'
import ShortBtn from './ShortBtn';
import DataShortBtn from '../DataShortBtn';
import '../styles/Trust.scss'

const Trust = (props) => {

  const btn = DataShortBtn.map(dataEl =>{
    <ShortBtn 
    key={dataEl.id}
    dataEl={dataEl}/>
  })




  return (
    <section className='Trust'>
      <h1 className='title'>Un productor en el cual puedes confiar</h1>
      <p className='text'>Nuestra reputacion nos avala como productores comprometidos en la satisfaccion del cliente.</p>
      <br/>
      <p className='text'>Construimos relaciones de varios años con distribuidores locales asi como exportadores, creando asi una red de basada en transparencia y confianza</p>
        <ShortBtn
        text="Learn More"/>
    </section>
  );
}

export default Trust;