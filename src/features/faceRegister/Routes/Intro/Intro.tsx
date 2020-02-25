import React, { FC, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import throttle from 'lodash/throttle'
import './Intro.scss'
import Header from 'common/components/Header'
import LOGO from 'assets/images/logo.svg'

const Intro: FC = () => {
  const history = useHistory()
  const goToConsentPage = useCallback(() => history.push('/face-register/user-confirm'), [history])

  return (
    <div className="Intro" onTouchStart={throttle(goToConsentPage, 1000, { trailing: false })}>
      <Header />
      <img className="logo" src={LOGO} alt="" />
      <div className="text">ReactJS meet up เล่าสู่กันฟัง [Thai session]</div>
    </div>
  )
}

export default Intro
