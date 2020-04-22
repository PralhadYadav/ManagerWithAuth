import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    flex: 1,
    backgroundColor: '#800000',
    borderColor: '#000000',
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 2,
    borderRedius: 5,
    alignSelf: 'stretch',
  },
  text: {
    alignSelf: 'center',
    color: '#FF0000',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export {Button};
