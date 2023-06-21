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
      dataEl={dataEl}
      handleClick={changeRoute}/>
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

    let navigate = useNavigate()
    function changeRoute(){
        if(staff[0]){ 
          navigate(`/AboutTeamRosie`);
        }
        else if(staff === staff[1]){
          navigate('/AboutTeamHeather')
        }
        else if(staff === staff[2]){
          navigate('/AboutTeamKadak')
      }
    }


    return (
      <main className='Team'>
        <Header/>
        <section className='gallery-team'>
            {staff[0]}
            {staff[1]}
            {staff[2]}
            {staff[3]}
            {staff[4]}
            {staff[5]}
        </section>
        <Footer/>
      </main>
    );
  }


  export default Team;