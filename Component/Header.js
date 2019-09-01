import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';

export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.header_title}>お天気アプリ</Text>
      </View>
    );
  }
}

//header-setting
const styles = StyleSheet.create({
  header_title: {
    fontSize: 48,
    color: '#282828',
    textAlign: 'center',
	padding: 10,
    fontWeight: '600'
  },
  header: {
    justifyContent: 'center',
    backgroundColor: '#1ebfff'
  }
});