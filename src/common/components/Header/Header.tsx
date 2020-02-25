import React, { FC } from 'react'
import './Header.scss'
import KBANK_LOGO from 'assets/images/kbank_logo.svg'

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  return (
    <header className="Header">
      <img className="kbank-logo" src={KBANK_LOGO} alt="back" />
    </header>
  )
}

Header.defaultProps = {}

export default Header
