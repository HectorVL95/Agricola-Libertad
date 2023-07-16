  import React from 'react'
  import Header from './Header';
  import Footer from './Footer';
  import TeamMember from './TeamMember';
  import '../styles/Team.scss'
  import StaffPicArray from '../StaffPicArray'
  import {Route, Routes, Link} from 'react-router-dom';
  import AboutTeamMember from './AboutTeamMember';


  const Team = () => {
    const staff = StaffPicArray.map(dataEl=>{
      return <Link key={dataEl.id} to={`/staff/${dataEl.id}`}> 
      <TeamMember
      dataEl={dataEl}/>
      </Link>
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
        <Routes>
            <Route path='/staff/:id' element={<AboutTeamMember  staffMembers={StaffPicArray}/>}/>
        </Routes>
        <Footer/>
      </main>
    );
  }


  export default Team;