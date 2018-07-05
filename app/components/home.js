'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,    
} from 'react-native';

import { connect } from 'react-redux';
import ListView from './listView';

import * as Actions from '../actions'; //Import your actions
import { Header } from 'react-native-elements';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {}

  }

  render(){
    return(
      <View style={styles.thingy}>
      <Header
        // leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Time Tracker', style: { color: '#fff', fontSize: 22 } }}
        rightComponent={{ 
          icon: 'home', 
          color: '#fff', 
          underlayColor: '#64b5f6',
          // onPress: () => {
          //   if(!this.props.currentClock.name === ""){
          //     this.props.dispatch(Actions.toggleView());
          //   }
          // }

          onPress: () => this.props.dispatch(Actions.toggleView())
        
        }}
      />

        <ListView/>
        
      </View>
    )

  }
}
const mapStateToProps = state => ({
  list: state.mainReducer.list,
  currentClock: state.mainReducer.currentClock
});

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({

  thingy: {
    paddingTop: 24,
  },

})