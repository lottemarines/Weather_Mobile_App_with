import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import DayComonent from '../Modules/DayComponent.js';

export default class Weather extends Component<Props> {
  render() {
    const information = this.props.information
    const name = this.props.information.name
	const tempInformation = this.props.information.main
    const weatherInformation = this.props.information.weather

    function InformationExit() {
      if (information.length != 0) {
        return(
          <View style={styles.weather}>
            <Text style={styles.weatherTitle}>今日の{name}の天気</Text>
            <View style={styles.dayWeather}>
              <DayComonent
				  weather={weatherInformation[0]}
				  temp={tempInformation}
				  />
            </View>
          </View>
        )
      } else {
        return(
          <View></View>
        )
      }
    }


    return (
      <InformationExit />
    );
  }
}

const styles = StyleSheet.create({
  weather: {
    backgroundColor: '#fff',
    paddingTop: 10,
    borderRadius: 10,
    marginBottom: 10
  },
  weatherTitle: {
    fontSize: 18,
    textAlign: 'center'
  },
  dayWeather: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});