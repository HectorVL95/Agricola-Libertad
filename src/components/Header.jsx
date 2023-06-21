import React, {useState} from 'react'
import '../styles/Header.scss'
import logo from '../assets/agricola-lib--small-logo.png'
import menu from '../assets/menu-btn.svg'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {

  const[isShown, setisShown] = useState("false")

  function handleClick() {
    setisShown(current => !current)
  }
  let navigate = useNavigate()
  function changeRoute(){
    let path='/index'
    navigate(path)
  }

  function getInTouch(){
    let path='/GetInTouch'
    navigate(path)
  }

  return (
    <div>
      <header>
        <img onClick={changeRoute}  className='logo' src={logo} alt="Produce Pay Logo" />
        <div className='touch-menu-btns'>
          <img className='menu-btn' src={menu} alt="Menu" onClick={handleClick} />
          <button onClick={getInTouch} className='get-touch-btn'>Get in Touch</button>
        </div>
      </header>
      {isShown ? null : <Navbar/>}
    </div>
  );
}

export default Header;