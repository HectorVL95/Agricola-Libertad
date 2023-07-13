  import React from 'react'
  import Header from './Header';
  import Footer from './Footer';
  import TeamMember from './TeamMember';
  import '../styles/Team.scss'
  import StaffPicArray from '../StaffPicArray';
  import AboutTeamRosie from './AboutTeamRosie';
  import { useNavigate } from 'react-router-dom';
  import AboutTeamHeather from './AboutTeamHeather';
  import AboutTeamKadak from './AboutTeamKadak';

  const Team = () => {
    const staff = StaffPicArray.map(dataEl=>{
      return <TeamMember
      key={dataEl.id}
      dataEl={dataEl}/>
    })

    /*const aboutTeam = StaffPicArray.map(
      dataEl=>{
        return <AboutTeamRosie
        key={dataEl.id}
        dataEl={dataEl}/>,
        <AboutTeamHeather
        key={dataEl.id}
        dataEl={dataEl}/>,
        <AboutTeamKadak
        key={dataEl.id}
        dataEl={dataEl}/>
      }
    )*/
   /* const rosie = staff[0];
    const heather = staff[1];
    const kadak = staff[2]

    let navigate = useNavigate()
    function changeRoute(){
        if(rosie){  
          navigate(`/AboutTeamRosie`);
        }
        else if(heather){
          navigate('/AboutTeamHeather')
        }
        else if(kadak){
          navigate('/AboutTeamKadak')
      }
    }*/

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