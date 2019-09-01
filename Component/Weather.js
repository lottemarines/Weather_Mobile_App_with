import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import DayComonent from '../Modules/DayComponent.js';

//JSON配列に2日分の天気のデータを格納している
// const dayWeather = [
//     {
//       dateLabel: "今日",
//       telop: "曇り",
//       date: "2018-12-04",
//       temperature: {
//         min: null,
//         max: {
//           celsius: "21",
//           fahrenheit: "69.8"
//         },
//       },
//       image: {
//         width: 50,
//         url: "http://weather.livedoor.com/img/icon/8.gif",
//         title: "曇り",
//         height: 31
//       }
//     },
//     {
//       dateLabel: "明日",
//       telop: "曇り",
//       date: "2018-12-05",
//       temperature: {
//         min: null,
//         max: {
//           celsius: "15",
//           fahrenheit: "59.0"
//         },
//       },
//       image: {
//         width: 50,
//         url: "http://weather.livedoor.com/img/icon/8.gif",
//         title: "曇り",
//         height: 31
//       }
//     },
// ]


export default class Weather extends Component<Props> {
  render() {
    const information = this.props.information
    const title = this.props.information.title
    const weatherInformation = this.props.information.forecasts

    function InformationExit() {
      if (information.length != 0) {
        return(
          <View style={styles.weather}>
            <Text style={styles.weatherTitle}>{title}</Text>
            <View style={styles.dayWeather}>
              <DayComonent weather={weatherInformation[0]} />
              <DayComonent weather={weatherInformation[1]} />
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