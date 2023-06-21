import React from 'react'
import '../styles/TeamMember.scss'

const TeamMember = (props) => {

  return (
    <div className='TeamMember'>
      <div className=''>
        <img className='staff-pic' src={props.dataEl.img} alt="Staff" />
        <a onClick={props.handleClick} className='name'>{props.dataEl.name}</a>
        <p className='role'>{props.dataEl.role}</p>
      </div>
    </div>
  );
}

export default TeamMember;