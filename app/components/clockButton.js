'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,         
    Button,        
} from 'react-native';

const clockButton = props => {
  return (

    <Button       
      title={props.name}       
      onPress={props.click} 
      disabled={props.disabled}     
    /> 

  )
};

export default clockButton;

const styles = StyleSheet.create({

})