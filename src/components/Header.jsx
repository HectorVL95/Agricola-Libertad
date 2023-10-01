import React, {useState} from 'react'
import '../styles/Header.scss'
import logo from '../assets/agricola-lib--small-logo.png'
import menu from '../assets/menu-btn.svg'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const[, setisShown] = useState("false")

  function handleClick(){
    document.querySelector('nav').classList.toggle('inactive');
    if(document.body.style.overflow !== "hidden"){
      document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow = "scroll";
    }

    setisShown(current => !current)
  };


  let navigate = useNavigate()
  function changeRoute(){
    let path='/'
    navigate(path)
  }

  function getInTouch(){
    let path='/GetInTouch'
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
  function goGallery(){
    let path='/Gallery'
    navigate(path)
  }
  function goToHistory(){
    let path = `/Story`;
    navigate(path)
  }

  return (
    <header>
      <img onClick={changeRoute}  className='logo' src={logo} alt="Produce Pay Logo" />
      <nav className='inactive'>
      <ul className='unordered-list'>
        <li onClick={goGallery}>Galeria</li>
        <li onClick={goMission}>Mision y Vision</li>
        <li onClick={goToTeams}>Nuestro Equipo</li>
        <li onClick={goToHistory}>Historia</li>
      </ul>
      </nav>
      <div className='touch-menu-btns'>
        <img className='menu-btn' src={menu} alt="Menu" onClick={handleClick} />
        <button onClick={getInTouch} className='get-touch-btn'>Get in Touch</button>
      </div>
    </header>
  );
}

export default Header;