import React, { Component } from 'react';

import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import Header from './Component/Header.js';
import Weather from './Component/Weather.js';
type Props = {};

//API宣言
//HTTPクライアント読み込み（下準備）
import axios from 'axios';
//BaseURL読み込み
const baseRequest = axios.create({
  baseURL: 'http://weather.livedoor.com/forecast/webservice/json/',
  responseType: 'json',
})

export default class App extends Component<Props> {

  state = {
    information: [],
  }

  onEndEditing(text) {
    baseRequest
      .get('v1', {params: {city: text} })
      .then( res => {
        this.setState({information: res.data})
		console.log(res.data);
      })
      .catch( error => {
        console.log(error.response);
      });
    this.setState({inputText: text})
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <Header />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="検索"
            style={styles.textInput}
            onEndEditing={ e => this.onEndEditing(e.nativeEvent.text)}
          />
        </View>
        <View style={styles.weatherContainer}>
          <Weather information={this.state.information}/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'gray'
  },
  inputContainer: {
  	padding: 10,
  	paddingBottom: 5,
  	backgroundColor: '#f1f2f6'
},
textInput: {
  height: 40,
  padding: 10,
  borderRadius: 10,
  backgroundColor: '#fff',
  borderColor: '#fff',
  borderWidth: 1
},
weatherContainer: {
  backgroundColor: '#f1f2f6',
  padding: 10,
  paddingBottom: 0
}
});
