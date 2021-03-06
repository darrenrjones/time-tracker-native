import React from 'react';
import {connect} from 'react-redux';
import SingleClock from './singleClock';
import { startTime, toggleStatus } from '../actions';

import {
  View,
} from 'react-native';

export class Clock extends React.Component {


  startTime = async () => {
    await this.props.dispatch(toggleStatus()); 
    this.runTime(); 
  }

  runTime(){
    if(this.props.status === true){      
      setTimeout(() => {  
        this.props.dispatch(startTime());
        this.runTime();
      }, 1000);
    }
  }
  stopTime = () =>{
    this.props.dispatch(toggleStatus());
  }

  render(){
    return(
      <View style={{alignItems: 'center', marginTop: "15%", marginBottom: "10%",}}>

        <SingleClock 
          startTime={this.startTime}
          stopTime={this.stopTime}
          name={this.props.name}
          time={Number(this.props.time)}
        />        

      </View>
    );

  }
}

export default connect()(Clock);

