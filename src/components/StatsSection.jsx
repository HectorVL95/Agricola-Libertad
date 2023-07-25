import React from 'react'
import Datastats from '../Datastats';
import Stats from './Stats';
import '../styles/StatsSection.scss'

const StatsSection = ({statsData}) => {

    const stats = statsData.map(dataEl =>{

      let containerClassName = ''

      if(dataEl.id === 3){
        containerClassName = 'stats-container-id-3'
      }
      else if(dataEl.id === 4){
        containerClassName = 'stats-container-id-4'
      }

      return <Stats
      key={dataEl.id}
      dataEl={dataEl}
      containerClassName={containerClassName}/>
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