'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View, 
} from 'react-native';

import { connect} from 'react-redux';

import { Text } from 'react-native-elements';

import ClockButton from './clockButton';
import TimeConverter from './timeConverter';

import stylesfile from './stylesfile';

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

      <View elevation={5} style={[styles.clockDisplay, stylesfile.shadow]}>

        <Text h3 style={styles.title}>{this.props.currentClock.name}</Text>

        <TimeConverter 
          stateTime={this.props.currentClock.time}
          timeDisplayStyle={styles.timeDisplay}
        />
        
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 250,    
    backgroundColor: "pink",
    borderRadius: 2
    
  },
  timeDisplay: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius:4,
    backgroundColor: 'rgba(255,255,255,.4)',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  title: {
    
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },



})