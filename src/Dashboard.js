import React from 'react';
import Mars from './Mars';
import {Route, Link} from 'react-router-dom';


class Dashboard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            rover : '',
            sol : ''
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
}


handleQueryText = (event) => {
    console.log("figuring out state value" + this.state)
  this.setState({
      sol: event.target.value
  }) 
 
} 

//handleClick = (value) => {
 //   this.setState({
 //       sol: value
 //   }, () => 
 //   {
     //   console.log(this.state)
 //   })
    //}
render(){
  
    return(
        <div className="App">
        <div className="solChoose"><p>Choose your Sol but keep in mind: Curiosity: 0-2126, Opportunity: 0-5111, Spirit: 0-2208 </p></div>
        <TextBar className="sol" sol={this.state.sol} handleQueryText={this.handleQueryText}  />
        <div className="marsImage">
        <img src="https://static-41.sinclairstoryline.com/resources/media/595b7746-7b3b-4bf0-bcd3-d68400f3a9ab-large16x9_marsFile.jpg?1532731663007" />
        </div>
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
       <Route path="/curiosity" render={(props) => <Curiosity {...props} sol={this.state.sol}/>  } />
       <Route path="/opportunity" render={(props) => <Opportunity {...props} sol={this.state.sol}/> } />
       <Route path="/spirit" render={(props) => <Spirit {...props} sol={this.state.sol} />} />
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

const TextBar = (props) => {
    return(
        <div>
           <input
        className={props.className}
        type="text"
        value={props.sol}
        onChange={props.handleQueryText}
         />
         </div>
        );
     }
     //took out submit button
    //<button onClick={() => {props.handleClick(props.value)}}>Submit</button>
         

const Landing = (props) => {
    return (
     <div></div> 
    );
}

const Curiosity = (props) => {
    console.log(props);
    return (
        <div>
            <Mars rover={props.match.path} sol={props.sol} />
            
        </div>
    );
}

const Opportunity = (props) => {
    console.log(props);
    return (
        <div>
          <Mars rover={props.match.path} sol={props.sol} />  
        </div>
    );
}

const Spirit = (props) => {
    console.log(props);
    return (
        <div>
            <Mars rover={props.match.path} sol={props.sol}/>
        </div>
    )
}
export default Dashboard;