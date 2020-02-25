import React, { FC } from 'react'
import classNames from 'classnames'

import './ImageProfile.scss'
import DEFAULT_PROFILE from 'assets/images/default_profile.svg'

interface ImageProfileProps {
  src?: string
  width?: string | number
  height?: string | number
  flipImage?: boolean
}

const ImageProfile: FC<ImageProfileProps> = ({ src, width, height, flipImage }) => {
  const ImageProfileClassName = classNames({
    ImageProfile: true,
    'flip-image': flipImage,
  })
  return (
    <div className={ImageProfileClassName} style={{ width, height }}>
      <div className="circle" />
      <img className="image" src={src || DEFAULT_PROFILE} alt="" />
    </div>
  )
}

ImageProfile.defaultProps = {
  width: 112,
  height: 112,
  flipImage: false,
}

export default ImageProfile
