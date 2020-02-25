import React, { FC } from 'react'
import Header from 'common/components/Header'
import './Login.scss'

const Login: FC = () => (
  <div className="Login">
    <Header />
    <div className="title">Login</div>
    <div className="text">username</div>
    <input type="text" />
    <div className="text">password</div>
    <input type="password" />
  </div>
)

export default Login
