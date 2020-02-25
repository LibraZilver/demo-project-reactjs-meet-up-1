import React, { FC, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import throttle from 'lodash/throttle'
import LOGO from 'assets/images/logo.svg'
import './End.scss'

const End: FC = () => {
  const history = useHistory()
  const goToIntroPage = useCallback(() => {
    history.push('/face-register/intro')
  }, [history])

  useEffect(() => {
    const timer = setTimeout(() => {
      goToIntroPage()
    }, 8000)
    return () => clearTimeout(timer)
  }, [goToIntroPage])

  return (
    <div className="End" onTouchStart={throttle(goToIntroPage, 1000, { trailing: false })}>
      <img className="logo" src={LOGO} alt="" />
      <div className="text">Registration successfully completed.</div>
    </div>
  )
}

export default End
