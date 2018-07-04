import React from 'react';
import { connect } from 'react-redux';

import { View, StyleSheet, Button, TouchableOpacity, } from 'react-native';

import { Text, List, ListItem } from 'react-native-elements';

import t from 'tcomb-form-native';
import { createNewTimer, populateTimer } from '../actions';

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
    this.props.dispatch(populateTimer(name,time));  
  }

  render(){
    return(
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
            style={styles.listItem}
            onPress={() => this.handleItemPress(item.name,item.time)}
          >
            <Text>{item.name} {item.time}</Text>
          </ TouchableOpacity>
          ))
        }
        </List>    

      </View>
    )
  }
}

const mapStateToProps = state => ({
  time: state.mainReducer.time,
  status: state.mainReducer.status,
  list: state.mainReducer.list,
});

export default connect(mapStateToProps)(ListView);

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },

});