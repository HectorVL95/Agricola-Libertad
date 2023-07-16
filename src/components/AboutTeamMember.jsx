import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/AboutTeamMember.scss'
import { useParams } from 'react-router-dom'

const AboutTeamHeather = (staffMembers) => {

  const { id } = useParams()
  
  const selectedMember = staffMembers.find((member) => member.id === id)

  return (
    <main className='AboutTeam'>
      <Header/>
      <div className='profile-pic'>
        <img src={selectedMember.img} alt={selectedMember.name} />
        <h2 className='name'>{selectedMember.name}</h2>
        <p className='role'>{selectedMember.role}</p>
        <p className='description'>{selectedMember.description}</p>
      </div>
      <Footer/>
    </main>
  );
}

export default AboutTeamHeather;