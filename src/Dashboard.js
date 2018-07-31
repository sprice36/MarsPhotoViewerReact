import React from 'react';
import Mars from './Mars';
import {Route, Link} from 'react-router-dom';


class Dashboard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            rover : '',
            sol : '',

        }
    }

_setRover = (roverName) => {
    if (roverName === "curiosity"){
    this.setState({
        rover: 'curiosity'
    })
    } else if (roverName === "opportunity"){
        this.setState({
            rover: 'opportunity'
        })
    } else if (roverName === "spirit"){
        this.setState({
            rover: 'spirit'
        })
    }
    console.log(this.state.rover)
}



render(){
  
    return(
        <div className="App">
         <div className="roverChoose"><p>Choose your Rover</p></div>
        <div className="roverContainer">
        <div className ="curiosity"> 
              <img src="https://mars-photos.herokuapp.com/explore/images/Curiosity_rover.jpg" />
         </div> 
        <div className ="opportunity"> 
            <img src="https://mars-photos.herokuapp.com/explore/images/Opportunity_rover.jpg" />
            </div> 
        <div className ="spirit"> 
            <img src="https://mars-photos.herokuapp.com/explore/images/Spirit_rover.jpg" />
            </div> 
        </div> 
        <div className="roverbuttonContainer">
          
        </div>
        <NavBar />
       <Route path="/" exact={true} component={Landing} /> 
       <Route path="/curiosity" component={Curiosity} />
       <Route path="/opportunity" component={Opportunity} />
       <Route path="/spirit" component={Spirit} />
       
       </div>
    );
} 
}

const NavBar = (props) => {
    return (
    <div>
    <Link to="/curiosity">Curiosity</Link>
    <Link to="/opportunity">Opportunity</Link>
    <Link to="/spirit">Spirit</Link>
    </div>
     );
} 

   
const Landing = (props) => {
    return (
     <div></div> 
    );
}

const Curiosity = (props) => {
    console.log(props);
    return (
        <div>
            <Mars rover={props.match.path}  />
        </div>
    );
}

const Opportunity = (props) => {
    return (
        <div>
          <Mars rover={props.match.path} />  
        </div>
    );
}

const Spirit = (props) => {
    return (
        <div>
            <Mars rover={props.match.path} />
        </div>
    )
}
export default Dashboard;