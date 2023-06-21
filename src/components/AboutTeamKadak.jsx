import React from 'react'
import Header from './Header'
import Footer from './Footer';
import Profile from './Profile';
import StaffPicArray from '../StaffPicArray';

const AboutTeamKadak = () => {

  const profile = StaffPicArray.map(dataEl =>{ 
    return <Profile
    key={dataEl.id}
    dataEl={dataEl}
    />}
  )

  return (
    <main className='AboutTeam'>
      <Header/>
      {profile[2]}
      <Footer/>
    </main>
  );
}

export default AboutTeamKadak;