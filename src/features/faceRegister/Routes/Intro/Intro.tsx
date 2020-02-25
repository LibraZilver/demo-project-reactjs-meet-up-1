import React, { FC, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import throttle from 'lodash/throttle'
import './Intro.scss'
// import INTRO_VIDEO from 'assets/videos/intro-register.mp4'

const Intro: FC = () => {
  const history = useHistory()
  const goToConsentPage = useCallback(() => history.push('/face-register/user-confirm'), [history])

  return (
    <div className="Intro" onTouchStart={throttle(goToConsentPage, 1000, { trailing: false })}>
      {/* <img className="logo" src={LOGO} alt="" /> */}
      {/* <video id="screen-intro" className="video" autoPlay loop muted>
        <source src={INTRO_VIDEO} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video> */}
    </div>
  )
}

export default Intro
