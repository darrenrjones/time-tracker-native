import React from 'react';
import { connect } from 'react-redux';

import { View, StyleSheet, Button, TouchableOpacity, } from 'react-native';

import { Text, List, } from 'react-native-elements';

import t from 'tcomb-form-native';
import { createNewTimer, populateTimer, toggleView, deleteTimer, toggleDeleteView, setDeleteInfo } from '../actions';

import Clock from './clock';
import TimeConverter from './timeConverter';

import stylesfile from './stylesfile';

const Form = t.form.Form;
// tcomb-form-native styling and stuff
const _ = require('lodash');
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);
stylesheet.controlLabel.normal.marginLeft = "27.5%";

const newClockInput = t.struct({
  CreateNewTimer: t.String
});

const options = {
  fields: {
    CreateNewTimer: {
      error: "You must enter a name for your clock",
      stylesheet: stylesheet
    },
  }
}

export class ListView extends React.Component{

  handleCreateNewTimer = () => {
    const value = this._form.getValue();
    if(value){
      this.props.dispatch(createNewTimer(value.CreateNewTimer));  
    }        
  }

  handleItemPress = (name,time) => {
    if(!this.props.deleteView){ // so you can't go to clock view and come back to homescreen with deleteview still up and accidentally delete something
      this.props.dispatch(toggleView());
      this.props.dispatch(populateTimer(name,time)); 
    }     
  }

  deleteTimer = (index) => {
    this.props.dispatch(deleteTimer(index));
    this.props.dispatch(toggleDeleteView());

  }

  handleLongPress = (index,name) => {
    this.props.dispatch(setDeleteInfo(index,name));
    this.props.dispatch(toggleDeleteView());
  }


  render(){
    let deleteRender;
    if(this.props.deleteView){ // longPress on item toggles deleteView
      deleteRender = (
        <View>

          <Text style={{fontSize: 16, textAlign: 'center', marginBottom: 5 }}>
            {`Are you sure you want to delete ${this.props.deleteName}?`}
          </Text>

          <View style={styles.deleteButtonContainer}>

            <TouchableOpacity       
            onPress={() => this.deleteTimer(this.props.deleteIndex)}            
          >
            <Text elevation={5} style={[styles.deleteYes, stylesfile.shadow]}>
              DELETE
            </Text>
          </TouchableOpacity> 

          <TouchableOpacity       
            onPress={() => this.props.dispatch(toggleDeleteView())}            
          >
            <Text style={[styles.deleteNo, stylesfile.shadow]}>
              CANCEL
            </Text>
          </TouchableOpacity>             

          </View>
          
        </View> 
      )
    }

    let menuRender;
    if(!this.props.clockView){
      menuRender = (

        <View>

          <View style={styles.inputContainer}>
            <Form 
              type={newClockInput}
              ref={userInput => this._form = userInput}
              options={options}
              style={styles.createInput}
            />   
            <Button
              title='Create'
              onPress={this.handleCreateNewTimer}
            />  
          </View>
          
          <List containerStyle={{marginBottom: 40}}>
          {deleteRender}
          {
            this.props.list.map((item, i) => ( //map through list and create touchableOpacity button for each
                
              <TouchableOpacity
                key={i}
                style={[styles.timerListItem, stylesfile.shadow]}
                onPress={() => this.handleItemPress(item.name,item.time)}
                onLongPress={() => this.handleLongPress(i,item.name)}
              >

                <Text style={styles.listItemName}>{item.name}</Text>

                <TimeConverter // component to properly display the time(seconds)
                  stateTime={item.time}
                  timeDisplayStyle={styles.timeDisplay}
                />

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
        <View>
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
  deleteView: state.mainReducer.deleteView,
  deleteIndex: state.mainReducer.deleteIndex,
  deleteName: state.mainReducer.deleteName

});

export default connect(mapStateToProps)(ListView);

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    marginLeft: "10%",
    padding: 10,
    backgroundColor: '#ffffff',
    maxWidth: "80%",
  },
  createInput: {
    color: 'green'
  },
  timerListItem: {
    backgroundColor:  '#0099ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: "75%",
    marginLeft: "12.5%",
    marginBottom: 10,
    padding: 10,
    marginTop: 10,
    borderRadius: 2,    
  },  
  listItemName: {
    fontSize: 18
  },
  timeDisplay:{
    fontSize: 18
  },
  deleteYes:{
    backgroundColor: 'red',
    height: 30,
    width: 90,
    borderRadius: 3,
    textAlign: 'center',
    padding: 5
  },
  deleteNo: {
    backgroundColor: 'green',
    height: 30,
    width: 90,
    borderRadius: 3,
    textAlign: 'center',
    padding: 5
  },
  deleteButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }


});