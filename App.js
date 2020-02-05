import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  state = {
    apiInfo: null,
    externalData: null,
  };

  componentDidMount() {
    this.getText()
      ;
  }

  getText() {
    const url = 'https://data.montgomeryal.gov/resource/7wcg-q8pp.json';
    console.log(url);

    fetch(url, {
    }).then( response => response.json())
    .then(responseText => {
      console.log(responseText)
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
        return <li> {item.request_type},{item.create_date}! </li>;
      });

     return (
      <View style={styles.container}>
        <Text>Works Loaded </Text>
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
