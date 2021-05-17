import React from 'react'
import  './cssfile.css'

class Learn extends React.Component{
    
    render(){
        return(
            
                <div class="totalpage">
                <div class="mainclass">
                <div class="middlepart">
                        <div class="header"></div>
                        <div class="learn">
                            <div class="l">Learn more</div>
                            <div class="row">
                                <div class="column">
                                    <div class="card1" style={{height: "fit-content",backgroundColor: "white", width: "300px"}}>
                                        <div class="card-header">
                                                <div class="icon1">
                                                    <a href="#" style={{color: "white"}}>
                                                        <span class="glyphicon glyphicon-cog"></span>
                                                    </a>
                                                </div>
                                                <div class="text">
                                                    <h4>How do I get started?</h4>
                                                    <small>View the docs</small>
                                                </div>
                                        </div>

                                        <div class="card-body">
                                            <div class="icon2">
                                                <a href="#" style={{color: "white"}}>
                                                    <span class="glyphicon glyphicon-info-sign" style={{size: "50%"}}></span>
                                                </a>
                                            </div>
                                            <div class="text">
                                                <h4>How does Hosting work?</h4>
                                                <small>View the docs</small>
                                            </div>
                                        </div>

                                        <div class="card-footer">
                                            <div class="icon3" style={{backgroundColor:"rgb(112, 207, 112)"}}>
                                                <a href="#" style={{color: "white"}}>
                                                    <p style={{color:"white",fontSize:"50px"}}> ☺</p>
                                                </a>
                                            </div>
                                            <div class="text">
                                                <h4>  What can Hosting do for me?
                                                    </h4>
                                                <small>Learn more</small>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            
                                <div class="column youclass container1"  >
                                <iframe class="responsive-iframe" width="630" height="354" src="https://www.youtube.com/embed/jsRVHeQd5kU?list=PLl-K7zZEsYLmOF_07IayrTntevxtbUxDL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    
                                </div>
                            </div>
                        </div><br/>
                        <hr style={{color: "black", width: "auto",fontWeight: "bold"}}/><br/>
                </div>
                </div>
                </div>
            
    )
}
}
export default Learn