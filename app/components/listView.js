import React from 'react';
import { connect } from 'react-redux';

import { View, StyleSheet, Button, TouchableOpacity, } from 'react-native';

import { Text, List, ListItem } from 'react-native-elements';

import t from 'tcomb-form-native';
import { createNewTimer, populateTimer, toggleView } from '../actions';

import Clock from './clock';


const Form = t.form.Form;

const newClockInput = t.struct({
  CreateNewTimer: t.String
});
const options = {
  fields: {
    CreateNewTimer: {
      error: "You must enter a name for your clock"
    },
  }
}

export class ListView extends React.Component{

  handleCreateNewTimer = () => {
    console.log("handleCreateNewTimer clicked");
    const value = this._form.getValue();
    if(value){
      this.props.dispatch(createNewTimer(value.CreateNewTimer));  
    }        
  }

  handleItemPress = (name,time) => {
    console.log('item ppressed');

    this.props.dispatch(toggleView());
    this.props.dispatch(populateTimer(name,time));      
  }

  render(){

    let menuRender;
    if(!this.props.clockView){
      menuRender = (
        <View style={styles.listViewContainer}>

        <View style={styles.inputContainer}>
          <Form 
            type={newClockInput}
            ref={userInput => this._form = userInput}
            options={options}
          />   
          <Button
            title='Create'
            onPress={this.handleCreateNewTimer}
          />  
        </View>

        <List containerStyle={{marginBottom: 20}}>
        {
          this.props.list.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.timerList}
            onPress={() => this.handleItemPress(item.name,item.time)}
          >
            <Text style={styles.listItemName}>{item.name}</Text>
            <Text style={styles.listItemTime}>{item.time}</Text>
          </ TouchableOpacity>
          ))
        }
        </List>            

      </View>
      )
    }

    let clockRender;
    if(this.props.clockView){
      clockRender = (
        <View style={styles.listViewContainer}>
          <Clock
            name={this.props.currentClock.name}
            time={this.props.currentClock.time}
            status={this.props.currentClock.status}
          />          
        </View>        
      )
    }

    return(
      <View>

        {menuRender}

        {clockRender}        

      </View>
    )
  }
}

const mapStateToProps = state => ({  
  list: state.mainReducer.list,
  clockView: state.mainReducer.clockView,
  currentClock: state.mainReducer.currentClock,

});

export default connect(mapStateToProps)(ListView);

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  timerList: {
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: "75%",
    marginLeft: "12.5%",
    padding: 10
  },
  listItemName: {
    fontSize: 18
  },
  listItemTime:{
    fontSize: 18

  }

});