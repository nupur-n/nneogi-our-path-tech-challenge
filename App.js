import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

// Component featuring the OurPath logo and username text-input
export default class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    name: ''
  }

  render() {
    return (
      <View style={appStyles.container}>

        {/* Our Path logo placement */}
        <Image style={appStyles.logo} source={require('./resources/our_path_logo.png')} />

        {/* Will update the greeting to add user's name as they type it  */}
        <Text style={appStyles.greeting}>Hello, my name is: {this.state.name}</Text>

        {/* Input that prompts the user to enter their name */}
        <TextInput
          style={appStyles.input}
          placeholder="Enter your name here"
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}/>

      </View>

    );
  }
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  logo: {
    margin: 20,
    resizeMode: 'contain',
    flexDirection: "row",
  },
  greeting: {
    textAlign: 'center',
    color: '#333333',
    margin: 20,
    fontSize: 30,
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    width: 200,
    margin: 25,
    textAlign: 'center',
  },
});
