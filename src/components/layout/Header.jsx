import React from 'react'
import { LogoTipo } from '../UI/LogoTipo/LogoTipo'
import { Namecompany } from '../UI/NameCompany/Namecompany'
import { NavBar } from '../UI/NavBar/NavBar'

export const Header = () => {
  return (
    <header className='header-company'>
        <LogoTipo />
        <Namecompany />
        <NavBar />
    </header>
  )
}
