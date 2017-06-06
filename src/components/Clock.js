import React, { Component }  from 'react';
import './Clock.css';

class Clock extends Component{

 constructor(props) {
    super(props);
    console.log(props.date);
    this.state = {date: new Date()};
  }

  componentDidMount () {
      this.itemId = setInterval(() => this.tick(), 1000)
  }

  tick(){
      this.setState({
      date: new Date()
    });
    //this.props.date = new Date();
  }

  componentWillUnMount(){

  }
  

    render(){
        return(
            <div className="tick">
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
                <h3>It is {this.state.date.toLocaleTimeString()}</h3>
                Only single update
                <h4>It is {this.props.date.toLocaleTimeString()}</h4>
            </div>
        );    
    };
}

export default Clock;