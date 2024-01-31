import React from 'react'
import HeaderLogo from '../assets/investment-calculator-logo.png'

function Header() {
  return (
    <header id='header'>
        <img src={HeaderLogo} alt="logo" />
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header