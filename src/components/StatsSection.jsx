import React from 'react'
import Datastats from '../Datastats';
import Stats from './Stats';
import '../styles/StatsSection.scss'

const StatsSection = () => {

    const stats = Datastats.map(dataEl =>{
      return <Stats
      key={dataEl.id}
      dataEl={dataEl}/>
    })

  return (
    <section className='Stats'>
      <h1 className='stats-title'>Agricola Libertad se compromete a dar la mejor calidad de productos y servicio a cliente</h1>
      <div className='stat-squares'>
        {stats}
        
      </div>
    </section>
  );
}

export default StatsSection;