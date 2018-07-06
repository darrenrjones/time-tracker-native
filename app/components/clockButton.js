'use strict';

import React from 'react';

import {             
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const clockButton = props => {
  return (

    <TouchableOpacity       
      onPress={props.click}
      style={[styles.button, props.disabled ? styles.disabledButton : styles.button]}
      disabled={props.disabled}
    >
      <Text style={styles.clockButtonText}>
        {props.name.toUpperCase()}
      </Text>
    </TouchableOpacity>
  )
};

export default clockButton;

const styles = StyleSheet.create({ 
  button: {
    height: "15%",
    width: "33%",
    backgroundColor: '#5f91ec',
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
  },
  disabledButton:{
    height: "15%",
    width: "33%",
    backgroundColor: '#5f91ec',
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    opacity: 0.3
  },
  clockButtonText: {
    fontSize: 18,
    textAlign: 'center',
    padding: 5,
  },



})