import React, {useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/AboutTeamMember.scss'
import { useParams } from 'react-router-dom'
import StaffPicArray from '../StaffPicArray'

const AboutTeamMember = () => {

  useEffect(() => {
    // Reset scroll position to top when the component is mounted
    window.scrollTo(0, 0);

    // Attach a visibility change event listener to reset scroll on tab switch
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);


  const {id} = useParams();
  const selectedTeamMember = StaffPicArray.find(member => member.id.toString() === id);

  if(!selectedTeamMember){
    return <div>Team member not found.</div>
  }

  return (
    <main className='AboutTeam'>
      <Header/>
      <div className='profile-pic'>
        <img src={selectedTeamMember.img} alt={selectedTeamMember.name} />
        <h2 className='name'>{selectedTeamMember.name}</h2>
        <p className='role'>{selectedTeamMember.role}</p>
        <p className='description'>{selectedTeamMember.description}</p>
      </div>
      <Footer/>
    </main>
  );
}

export default AboutTeamMember;