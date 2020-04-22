import React from 'react';
import {View} from 'react-native';

const CardSection = props => {
  return <View style={styles.viewStyle}>{props.children}</View>;
};

const styles = {
  viewStyle: {
    borderBottomWidth: 1,
    backgroundColor: '#ffff',
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#000000',
    position: 'relative',
  },
};

export {CardSection};
