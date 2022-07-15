import React, { Component } from 'react'
import './portfolio.css'
import PortfolioCard from './portfolioCard.jsx'

export default class Portfolio extends Component {

    state = {
        images: ['02', '03', '04', '05', '06', '07']
    }
  render() {
    return <>
        <div className="container text-center">
            <div className="portfolio">
                <h2>PORTFOLIO</h2>
                <div className="separator2 my-4">
                    <div className="sepDash2"></div>
                    <i className="fa-solid fa-star fa-2xl"></i>
                    <div className="sepDash2"></div>
                </div>

                <div className="row py-5 g-5" >
                    {
                        this.state.images.map((img,key) => <PortfolioCard imgURL={img} key={key} />)
                    }
                </div>
            </div>
        </div>
    </>
  }
}
