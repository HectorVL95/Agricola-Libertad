import React from 'react'
import '../styles/Stats.scss'

const Stats = (props) => {
  return (
    <article className='stat'>
      <h2 className='cantidad'>{props.dataEl.cantidad}</h2>
      <h4 className='contacto'>{props.dataEl.contact}</h4>
      <p className='descripcion'>{props.dataEl.description}</p>
    </article>
  );
}

export default Stats;