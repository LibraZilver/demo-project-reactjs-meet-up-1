import React, { FC, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import throttle from 'lodash/throttle'
import './End.scss'
import Header from 'common/components/Header'
import LOGO from 'assets/images/logo.svg'
import ConfirmButton from 'features/faceRegister/common/components/ConfirmButton'

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
      <Header />
      <img className="logo" src={LOGO} alt="" />
      <div className="text">Registration successfully completed.</div>
      <div className="button-wrap">
        <ConfirmButton isHiddenCancel okText="ปิด" />
      </div>
    </div>
  )
}

export default End
