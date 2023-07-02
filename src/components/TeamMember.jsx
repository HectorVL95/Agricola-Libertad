import React from 'react'
import '../styles/TeamMember.scss'
import { Link } from 'react-router-dom';

const TeamMember = (props) => {

  return (
    <div className='TeamMember'>
      <div className=''>
        <img className='staff-pic' src={props.dataEl.img} alt="Staff" />
        <Link to={props.dataEl.route} className='name'>{props.dataEl.name}</Link>
        <p className='role'>{props.dataEl.role}</p>
      </div>
    </div>
  );
}

export default TeamMember;