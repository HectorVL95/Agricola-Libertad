import React from 'react'
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import StaffPicArray from '../StaffPicArray';

const AboutTeamSteve = () => {

  const profile = StaffPicArray.map(dataEl =>{ 
    return <Profile
    key={dataEl.id}
    dataEl={dataEl}
    />}
  )

  return (
    <main className='AboutTeam'>
      <Header/>
      {profile[5]}
      <Footer/>
    </main>
  );
}

export default AboutTeamSteve;