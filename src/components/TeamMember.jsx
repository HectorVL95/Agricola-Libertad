import React from 'react'
import '../styles/TeamMember.scss'
import { Link } from 'react-router-dom';

const TeamMember = (props) => {

  return (
    <div className='TeamMember'>
      <div>
        <img className='staff-pic' src={props.dataEl.img} alt="Staff" />
        <p className='name'>
          <Link to={`/AboutTeamMember/${props.dataEl.id}`}>
            {props.dataEl.name}
          </Link>
        </p>
        <p className='role'>{props.dataEl.role}</p>
      </div>
    </div>
  );
}

export default TeamMember;