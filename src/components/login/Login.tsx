import React from 'react'
import "./login.scss"

const Login = () => {
  return (
    <div className="box__container">
    <div className="box">
      <div className="face bottom"></div>
      <div className="face back"></div>
      <div className="face right"></div>
      <div className="face left">
        <div className="icons">
          <div className="umbrella"></div>
          <div className="orientation">
            <div className="base"></div>
          </div>
          <div className="glass"></div>
        </div>
      </div>
      <div className="face front">
        <div className="recycled">
          <div className="arrow"></div>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
        <div className="label"></div>
        <div className="ball"></div>
      </div>
      <div className="face top">
        <div className="cover-back"></div>
        <div className="cover-right"></div>
        <div className="cover-left"></div>
        <div className="cover-front"></div>
      </div>
      <div className="content">
        <div className="pikachu">
          <div className="ear left"></div>
          <div className="ear"></div>
          <div className="head">
            <div className="eye"></div>
            <div className="eye"></div>
            <div className="nouse"></div>
            <div className="mouth"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login