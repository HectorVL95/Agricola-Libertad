import React from 'react'
import '../styles/Navbar.scss'
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {

  let navigate = useNavigate()
  const changeRoute = ()=>{
    let path = `/Story`;
    navigate(path)
  }
  function goToTeams(){
    let path= '/Team'
    navigate(path)
  }
  function goMission(){
    let path='/MissionVision'
    navigate(path)
  }

  return (
    <nav>
      <ul className='unordered-list'>
        <li>Galeria</li>
        <li onClick={goMission}>Mision y Vision</li>
        <li onClick={goToTeams}>Nuestro Equipo</li>
        <li onClick={changeRoute}>Historia</li>
      </ul>
    </nav>
  );
}

export default Navbar;