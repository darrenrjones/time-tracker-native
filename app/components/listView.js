import React from 'react';

import { View, StyleSheet, Button, TouchableOpacity, } from 'react-native';

import { Text, List, ListItem } from 'react-native-elements';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const newClockInput = t.struct({
  CreateNewTimer: t.String
});

handleFormSubmit = () => {
  console.log('form submitted');
  
}

handleItemPress = () => {
  console.log('item ppressed');
  
}

const clockList = [
  {
    name:"trashClock",
    time: 119
  },
  {
    name:"twotwo",
    time: 599
  },
]

export class ListView extends React.Component{


  render(){
    return(
      <View style={styles.listViewContainer}>

        <View style={styles.inputContainer}>
          <Form type={newClockInput} />   
          <Button
            title='Create'
            onPress={() => {handleFormSubmit()}}
          />  
        </View>

        <List containerStyle={{marginBottom: 20}}>
        {
          clockList.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.listItem}
            onPress={() => {handleItemPress()}}
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

export default ListView;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },

});