import React, { Component } from 'react'
import './home.css'

export default class Home extends Component {
  render() {
    return <>
    <div className="w-100 homeDIV">
        <div className="container text-center">
            <img src={process.env.PUBLIC_URL + '/assets/svg/01.svg'} alt="logo" className='mainLogo' />
            <h1>START REACT</h1>
            <div className="separator">
                <div className="sepDash"></div>
                <i class="fa-solid fa-star fa-2xl whiteFont"></i>
                <div className="sepDash"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
    
    </>
  }
}
