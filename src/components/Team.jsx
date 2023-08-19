  import Reac, {useEffect} from 'react'
  import Header from './Header';
  import Footer from './Footer';
  import TeamMember from './TeamMember';
  import '../styles/Team.scss'
  import StaffPicArray from '../StaffPicArray'
  import {Route, Routes, Link, useParams} from 'react-router-dom';
  import AboutTeamMember from './AboutTeamMember';


  const Team = () => {

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

    const staff = StaffPicArray.map(dataEl=>{
      return (
        <TeamMember dataEl={dataEl}/>

    )})

    const { id } = useParams()

    return (
      <main className='Team'>
        <Header/>
        <h1 className='team-title'>Leadership Team</h1>
        <section className='gallery-team'>
          {staff.map((item) => item) }
        </section>
        <Footer/>
      </main>
    );
  }


  export default Team;