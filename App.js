import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Async from 'react-async';
import { Updates } from 'expo';
import MGM311 from "./MGM311.js"


class App extends Component {
  state = {
    apiInfo: null,
    externalData: null,

  };

  componentDidMount() {
    this.getText()
      ;
  }

  async getText() {
    const url = 'https://data.montgomeryal.gov/resource/7wcg-q8pp.json';
    console.log(url);

    fetch(url, {
    }).then( response => response.json())
    .then(responseText => {
      //console.log(responseText)
      this.setState({ externalData: responseText } )
      })
    .catch((error) => {
     return Promise.reject()
    });

  }
  
  render() {

    if (this.state.externalData === null) {
      // Render loading state ...
    return (
      <View style={styles.container}>
        <Text>try xxxxxxxx009 - Changed to Class working on your app!</Text>      
      </View>
    );
    } else {

      const items = this.state.externalData.map(function(item, index){
        return <li> {item.request_type} </li>;
      });
     
     console.log("FOO" + items);


     return (
      <View style={styles.container}>
        <Text>know Works Loaded  </Text>
        <Image source={require('./mgmopendata.png')}></Image>
        <MGM311 myitems={this.state.externalData} />
      </View>
       );
     }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
