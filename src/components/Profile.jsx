import React from 'react'
import '../styles/Profile.scss'


const Profile = (props) => {
  return (
    <div className='profile-pic'>
      <img src={props.dataEl.img} alt={props.dataEl.name} />
      <h2 className='name'>{props.dataEl.name}</h2>
      <p className='role'>{props.dataEl.role}</p>
      <p className='description'>{props.dataEl.description}</p>
    </div>
  );
}

export default Profile;