import React from 'react'
import Header from './Header'
import Footer from './Footer'
import StaffPicArray from '../StaffPicArray'
import Profile from './Profile'

const AboutTeamHeather = () => {

  const profile = StaffPicArray.map(dataEl =>{ 
    return <Profile
    key={dataEl.id}
    dataEl={dataEl}
    />}
  )

  return (
    <main className='AboutTeam'>
      <Header/>
      {profile[1]}
      <Footer/>
    </main>
  );
}

export default AboutTeamHeather;