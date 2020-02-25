import React, { FC } from 'react'
import classNames from 'classnames'
import './ConfirmButton.scss'

interface IConfirmButtonProps {
  okText?: string
  cancelText?: string
  onOk?(value?: any): void
  onCancel?(): void
  isHiddenCancel?: boolean
  disabled?: boolean
}

const ConfirmButton: FC<IConfirmButtonProps> = ({
  okText,
  cancelText,
  onOk,
  onCancel,
  isHiddenCancel,
  disabled,
}) => {
  const ConfirmButtonClassName = classNames({
    ConfirmButton: true,
    disabled,
  })
  return (
    <div className={ConfirmButtonClassName}>
      <div className="button accept" onTouchStart={onOk}>
        {okText}
      </div>
      {!isHiddenCancel && (
        <div className="button decline" onTouchStart={onCancel}>
          {cancelText}
        </div>
      )}
    </div>
  )
}

ConfirmButton.defaultProps = {
  okText: 'Ok',
  cancelText: 'Cancel',
  onOk: () => {},
  onCancel: () => {},
  isHiddenCancel: false,
  disabled: false,
}

export default ConfirmButton
