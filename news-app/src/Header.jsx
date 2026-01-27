import { useState } from 'react';
import './Header.css';
import name from '/public/name.png'

function Header() {

  return(
      <img className ="name" src={name} alt="logo" />
  )
}

export default Header