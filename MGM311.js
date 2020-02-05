import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View,  } from 'react-native';
import Async from 'react-async';
import { Updates } from 'expo';

class MGM311 extends Component {
  render() {
    return( 
     
      <FlatList
          data={this.props.myitems}

          renderItem={({item}) => <Text>{item.request_type}</Text>}
        />
     
     );
  }
}
export default MGM311;
