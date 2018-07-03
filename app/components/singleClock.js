'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,    
} from 'react-native';

import { connect } from 'react-redux';

import { Button } from 'react-native-elements';



class SingleClock extends Component {


  getSeconds = () => {
    return ('0' + this.props.time % 60).slice(-2);
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

        <Text>Stopwatch</Text>

        <Text >
          {this.getHours()}:{this.getMinutes()}:{this.getSeconds()}
        </Text>
        
            <Button 
            title='Start'
            disabled={this.props.status} 
            onPress={() => this.props.startTime()}
            
            />
            
            {/* <button disabled={!this.props.status} id="stop" className="buttons" onClick={() => this.props.stopTime()}>stop</button>
            <button id="reset" className="buttons">reset</button> */}


      </View>

    );

  }
}

const mapStateToProps = state => ({
  time: state.mainReducer.time,
  status: state.mainReducer.status
});

export default connect(mapStateToProps)(SingleClock);

const styles = StyleSheet.create({

  timeDisplay: {
    backgroundColor: "pink",
    borderWidth: 1,
    borderColor: "green",
    borderRadius:4
  }
})