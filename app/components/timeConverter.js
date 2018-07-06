'use strict';

import React, { Component } from 'react';
import {    
    View, 
} from 'react-native';

import { connect} from 'react-redux';

import { Text } from 'react-native-elements';

class TimeConverter extends Component {


  getSeconds = () => {
    return ('0' + this.props.stateTime % 60).slice(-2);
  }

  getMinutes = () => {
    let min = Math.floor(this.props.stateTime / 60) % 60
    if(min.toString().length < 2){
      return '0' + min;
    } else {
      return min;
    }    
  }

  getHours = () => {
    let hour = Math.floor(this.props.stateTime /60 /60).toLocaleString('en');
    if ( hour.toString().length < 2){
      return '0' + hour;
    } else {
      return hour;
    }
  }  


  render(){

    return(

      <View >

        <Text style={this.props.timeDisplayStyle}>
          {this.getHours()}:{this.getMinutes()}:{this.getSeconds()}
        </Text>
        
      </View>

    );

  }
}

const mapStateToProps = state => ({
  currentClock: state.mainReducer.currentClock
});

export default connect(mapStateToProps)(TimeConverter);

