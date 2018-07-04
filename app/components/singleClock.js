'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View, 
} from 'react-native';

import { connect} from 'react-redux';

import { Button, Text } from 'react-native-elements';

import ClockButton from './clockButton';


class SingleClock extends Component {


  getSeconds = () => {
    return ('0' + this.props.list[0].time % 60).slice(-2);
  }

  getMinutes = () => {
    let min = Math.floor(this.props.time / 60) % 60
    if(min.toString().length < 2){
      return '0' + min;
    } else {
      return min;
    }    
  }

  getHours = () => {
    return Math.floor(this.props.time /60 /60).toLocaleString('en')    
  }  


  render(){

    return(

      <View style={styles.timeDisplay}>

        <Text h4>{this.props.list[0].name}</Text>

        <Text >
          {this.getHours()}:{this.getMinutes()}:{this.getSeconds()}
        </Text>
        
        <ClockButton 
          name={"Start"}
          click={this.props.startTime}
        />

        <ClockButton 
          name={"Stop"}
          click={this.props.stopTime}
        />
  


      </View>

    );

  }
}

const mapStateToProps = state => ({
  list: state.mainReducer.list,
  time: state.mainReducer.time,
  status: state.mainReducer.status
});

export default connect(mapStateToProps)(SingleClock);

const styles = StyleSheet.create({

  timeDisplay: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 20,
    maxWidth: "50%",
    backgroundColor: "pink",
    borderWidth: 3,
    borderColor: "green",
    borderRadius:4,
    marginLeft: "25%",
    marginTop: "25%",
  },
  button: {

  },
  touchable: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius:4,
    maxWidth: "33%",    
  },
  touchableText: {
    fontSize: 16,
    
  }
})