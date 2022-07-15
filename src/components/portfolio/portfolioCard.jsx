import React, { Component } from 'react'
import $ from 'jquery/dist/jquery.js'

export default class PortfolioCard extends Component {
/*
    REMOVEcloseCardDetailsMenu(){
        $('#cardDetails').fadeOut()
    }*/

    state = {
        imgLINK : this.props.imgURL
    }

    

    REMOVEcloseCardDetailsMenu(link){
        $('.cardExpandInner').animate({
            top:'-500px',
            opacity: '0'
        },200)
        $('.cardExpand').animate({
            opacity: '0'
        },400,()=>{$('#cardDetails'+link).hide()})
    }

    REMOVEcloseCardDetailsMenuOUTSIDE(e,link){
        let url='cardExpand'+link;
        if(($(e.target).attr('id')+link+'').includes(url))
            this.REMOVEcloseCardDetailsMenu();
        
    }

    ADDcloseCardDetailsMenu(link){
        $('#cardDetails'+link).show()
        $('.cardExpandInner').animate({
            top:'0',
            opacity: '1'
        },200)
        $('.cardExpand').animate({
            opacity: '1'
        },400)
    }

    render() {
        let imgLINK = this.state.imgLINK;
        let cardExpandID ='cardExpand' + imgLINK
        let cardDetails = 'cardDetails' + imgLINK


        console.log(imgLINK)
        return <>
            <div className="col-md-4">
                <div className="card cardImage cardContainer">
                    <img src={process.env.PUBLIC_URL + `/assets/img/${imgLINK}.png`} className="w-100 card cardImage" alt="img"/>
                    <div className="overlayColor" onClick={()=>this.ADDcloseCardDetailsMenu(imgLINK)}>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>

            
            
            {/* onClick={e=>this.REMOVEcloseCardDetailsMenuOUTSIDE(e,imgLINK)} */} 
            <div id={cardDetails} className="cardDetailsGeneral">
                <div className='cardExpand' id={cardExpandID}>
                    <div className="cardExpandInner" >
                        <i class="fa-solid fa-x closeIcon" onClick={()=>this.REMOVEcloseCardDetailsMenu(imgLINK)}></i>

                        <h2>PORTFOLIO</h2>
                        <div className="separator2 my-4">
                            <div className="sepDash2"></div>
                            <i className="fa-solid fa-star fa-2xl"></i>
                            <div className="sepDash2"></div>
                        </div>

                        <div className="card cardImage cardContainer">
                            <img src={process.env.PUBLIC_URL + `/assets/img/${imgLINK}.png`} className="m-auto card cardImage w-50" style={{cursor:'default'}} alt="img"/>
                        </div>
                        
                        <p className='cardExpandP'>{imgLINK}Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias tempore fuga voluptate porro excepturi perferendis aperiam eius quibusdam odit numquam consectetur eveniet quae molestiae culpa libero voluptas, perspiciatis quo hic sit qui quisquam maxime, rem itaque. Maxime, cupiditate voluptatum consequatur rem cumque at eos delectus assumenda, necessitatibus animi nihil nam.</p>

                        <button type="button" class="btn btn-success" onClick={()=>this.REMOVEcloseCardDetailsMenu(imgLINK)}><i class="fa-solid fa-x"></i> Close Window</button>
                    </div>
                </div>
            </div>
        
        </>
    }
}
