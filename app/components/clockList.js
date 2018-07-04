import React from 'react';
import {connect} from 'react-redux';
import SingleClock from './singleClock';
import { addStopwatch, startTime, toggleStatus } from '../actions';

import {
  StyleSheet,
  FlatList,
  View,
  Text,    
} from 'react-native';

export class clockList extends React.Component {


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

  addStopwatch = () => {
    this.props.dispatch(addStopwatch());
  }

  exampleFunction = () => {
    console.log('button presseed!!!!');    
  }  


  render(){
    return(
      <View>

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
const mapStateToProps = state => ({
  list: state.mainReducer.list,
  status: state.mainReducer.status,
  time: state.mainReducer.time
});

export default connect(mapStateToProps)(clockList);

const styles = StyleSheet.create({

  text: {
    paddingTop: 20,
  },

})