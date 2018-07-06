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
    return ('0' + this.props.currentClock.time % 60).slice(-2);
  }

  getMinutes = () => {
    let min = Math.floor(this.props.currentClock.time / 60) % 60
    if(min.toString().length < 2){
      return '0' + min;
    } else {
      return min;
    }    
  }

  getHours = () => {
    let hour = Math.floor(this.props.currentClock.time /60 /60).toLocaleString('en');
    if ( hour.toString().length < 2){
      return '0' + hour;
    } else {
      return hour;
    }
  }  


  render(){

    return(

      <View style={styles.clockDisplay}>

        <Text h4 style={styles.title}>{this.props.currentClock.name}</Text>

        <Text style={styles.timeDisplay}>
          {this.getHours()}:{this.getMinutes()}:{this.getSeconds()}
        </Text>
        
        <ClockButton 
          name={"Start"}
          click={this.props.startTime}
          disabled={this.props.currentClock.status}
        />

        <ClockButton 
          name={"Stop"}
          click={this.props.stopTime}
          disabled={!this.props.currentClock.status}
        />
  


      </View>

    );

  }
}

const mapStateToProps = state => ({
  currentClock: state.mainReducer.currentClock
});

export default connect(mapStateToProps)(SingleClock);

const styles = StyleSheet.create({

  clockDisplay: {
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
    marginBottom: "25%"
  },
  timeDisplay: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius:4,
    backgroundColor: 'rgba(255,255,255,.4)',
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10
  }


})