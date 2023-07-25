import React from 'react'
import '../styles/Stats.scss'

const Stats = ({dataEl, containerClassName}) => {
  return (
    <article className={`stat ${containerClassName}`}>
      {dataEl.cantidad}
      {dataEl.contact}
      {dataEl.description}
    </article>
  );
}

export default Stats;