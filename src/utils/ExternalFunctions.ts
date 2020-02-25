import isNil from 'lodash/isNil'
import isEmpty from 'lodash/isEmpty'

export const isObjectEmpty = (obj: any) => {
  return isNil(obj) || isEmpty(obj)
}

export const sleep = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const timestampToDateTimeFormat = (timestamp: number | string) => {
  if (!timestamp) return ''
  const date = new Date(timestamp)
  const formatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  }
  return date.toLocaleString(['ban', 'id'], formatOptions) + ' น.'
}

export const formatPhoneNumber = (phoneNumberString: string) => {
  let phone = phoneNumberString.replace(/\D/g, '')
  const match = phone.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/)
  if (match) {
    phone = `${match[1]}${match[2] ? '-' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`
  }
  return phone
}
