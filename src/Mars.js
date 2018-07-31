import React from 'react';
import Image from './Image';
import Rover from './Rover';
import Sol from './Sol';
import Dashboard from './Dashboard';

class Mars extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            photos : [], 
           // sol : props.sol
        }
    }
   
componentDidMount(){
    this._getData();
    }

_format = (roverPath, solPath) => {
    return `http://mars-photos.herokuapp.com/api/v1/rovers${roverPath}/photos?sol=${solPath}`;
} 

_getData = () => {
    fetch(this._format(this.props.rover, this.props.sol) , {
        method: 'get'
    })
    .then((response) => {
      
        return response.json()
    })
    .then((jsonData) => {
        this.setState ({
            photos : jsonData.photos
        })
       // console.log(this.state.rover);

        })
    .catch ((err) => {
      console.log(err);
    })
}

render(){

    return(
    <div>
        <div>
    {
        this.state.photos.map(image => {
            return <Image img_src={image.img_src} 
            />
        })
    }
        </div>
    </div> 
    );
} 
}

export default Mars;