import React, { FC, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import throttle from 'lodash/throttle'
import QRCode from 'qrcode.react'
import './End.scss'
import Header from 'common/components/Header'
import ConfirmButton from 'features/faceRegister/common/components/ConfirmButton'

const End: FC = () => {
  const history = useHistory()
  const goToIntroPage = useCallback(() => {
    history.push('/face-register/intro')
  }, [history])

  useEffect(() => {
    const timer = setTimeout(() => {
      goToIntroPage()
    }, 80000)
    return () => clearTimeout(timer)
  }, [goToIntroPage])

  return (
    <div className="End" onTouchStart={throttle(goToIntroPage, 1000, { trailing: false })}>
      <Header />
      <QRCode className="qr-code" renderAs="svg" size={800} value="https://github.com/WatcharaChe/demo-project-reactjs-meet-up-1"  includeMargin />
      <div className="text">Registration successfully completed.</div>
      <div className="button-wrap">
        <ConfirmButton isHiddenCancel okText="ปิด" />
      </div>
    </div>
  )
}

export default End
