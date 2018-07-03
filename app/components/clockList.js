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

  async startTime() {
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
  stopTime(){
    this.props.dispatch(toggleStatus());
  }

  addStopwatch(){
    this.props.dispatch(addStopwatch());
  }


  render(){
    return(
      <View>
        {/* <Button 
          onPress={() => this.addStopwatch()}
          title="Create Stopwatch"
          color="green"
          accessibilityLabel="button to create another watch"
        /> */}
        <SingleClock />

      </View>
    );

  }
}
const mapStateToProps = state => ({
  status: state.status

});

export default connect(mapStateToProps)(clockList);

const styles = StyleSheet.create({

  text: {
    paddingTop: 20,
  },

})