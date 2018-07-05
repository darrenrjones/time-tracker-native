'use strict';

import React from 'react';

import {             
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
