import React, { Component } from 'react';
import { FlatList , Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native';
import { StyleSheet, Text, View,  } from 'react-native';
import Async from 'react-async';
import { Updates } from 'expo';


class MGM311 extends Component {

   constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
      ]
    }
  }
    
  render() {

    const state = this.state;

    return( 
      <View>
       <Table>
          <Row data={this.state.tableHead} />
          <Rows data={this.state.tableData} />
        </Table>   
       </View>
     );

     
  }

}



export default MGM311;
