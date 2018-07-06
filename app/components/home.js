'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,    
    ScrollView,    
} from 'react-native';

import { connect } from 'react-redux';
import ListView from './listView';

import * as Actions from '../actions'; //Import your actions
import { Header } from 'react-native-elements';

class Home extends Component {

  render(){    
    
    return(

      <ScrollView style={styles.thingy}>

        <Header
          centerComponent={{ text: 'Time Tracker', style: { color: '#fff', fontSize: 25 } }}
          rightComponent={{ 
            icon: 'home', 
            color: '#fff',
            size: 35, 
            underlayColor: '#64b5f6',
            disabled: this.props.currentClock.status,
            onPress: () => {
              if(this.props.clockView){
                this.props.dispatch(Actions.toggleView());
              }
            }       
          }}
        />

        <ListView/>
        
      </ScrollView>
    )

  }
}
const mapStateToProps = state => ({
  list: state.mainReducer.list,
  currentClock: state.mainReducer.currentClock,
  clockView: state.mainReducer.clockView,
});

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({

  thingy: {
    paddingTop: 24,
  },

})