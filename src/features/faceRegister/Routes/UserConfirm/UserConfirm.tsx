import React, { FC, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import throttle from 'lodash/throttle'
import './UserConfirm.scss'
import Header from 'common/components/Header'
import ImageProfile from './ImageProfile'
import ConfirmButton from 'features/faceRegister/common/components/ConfirmButton'
import { formatPhoneNumber } from 'utils/ExternalFunctions'

const userData = {
  image: '',
  name: 'เจ้าโมกข์',
  mobile: '09123456789',
}

const UserConfirm: FC = () => {
  const { image, name, mobile } = userData
  const history = useHistory()

  const goToEndPage = useCallback(() => history.push('/face-register/end'), [history])

  const goBack = useCallback(() => history.goBack(), [history])

  return (
    <div className="UserConfirm">
      <Header />
      <div className="content">
        <div className="image-profile-wrap">
          <ImageProfile width={760} height={760} src={image} flipImage />
        </div>
        <div className="name-text">{name}</div>
        <div className="mobile-text">{formatPhoneNumber(mobile)}</div>
        <div className="button-wrap">
          <ConfirmButton
            okText="ใช่"
            cancelText="ไม่ใช่"
            onOk={throttle(goToEndPage, 1000, { trailing: false })}
            onCancel={throttle(goBack, 1000, { trailing: false })}
          />
        </div>
      </div>
    </div>
  )
}

export default UserConfirm
