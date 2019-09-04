import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

// <Text style={styles.date}>{`${date} (${dateLabel})`}</Text>
// <Image style={styles.image} source={{uri: image.url}} />
// <View style={styles.dayTemperature}>
//   <Text style={styles.dayTemperatureHigh}>
// 	{ temperature.max? `${temperature.max.celsius}℃` : `-℃` }
//   </Text>
//   <Text style={styles.dayTemperatureLow}>
// 	{ temperature.min? `${temperature.min.celsius}℃` : `-℃` }
//   </Text>
// </View>

export default class DayComonent extends Component<Props> {
  render() {
    const { description, icon, id, main, image } = this.props.weather
	const { temp_max, temp_min, temp, humidity, pressure } = this.props.temp
    return (
      <View style={styles.dayComonent}>
        
        <Text style={styles.day_weather}>{description}</Text>
		<Image style={styles.image} source={{uri: 'http://openweathermap.org/img/wn/'+icon+'@2x.png'}} />
		<Text style={styles.day_weather}>現在の気温 {temp} ℃</Text>
		 <View style={styles.dayTemperature}>
		   <Text style={styles.dayTemperatureHigh}>
		 	{ temp_max? `${temp_max}℃` : `-℃` }
		   </Text>
			 <Text style={styles.day_weather}> / </Text>
		   <Text style={styles.dayTemperatureLow}>
		 	{ temp_min? `${temp_min}℃` : `-℃` }
		   </Text>
		</View>	
        <Text style={styles.dayHumidity}>{humidity}%</Text>
      </View>
    );
  }
}


const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 2) / 3);
const imageWidth = dimensions.width;
const styles = StyleSheet.create({
  dayComonent: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  date: {
    fontSize: 12,
    paddingBottom: 5,
  },
  day_weather: {
    fontWeight: '600',
    paddingTop: 5,
    fontSize: 20,
  },
  image: {
    // width: imageWidth * 0.3,
    // height: imageHeight * 0.3,
	width: imageWidth * 0.5,
    height: imageHeight * 0.5,
    borderRadius: 30,
  },
  dayTemperature: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  dayTemperatureHigh: {
    fontSize: 32,
    color: '#eb4d4b',
    marginRight: 10,
  },
  dayTemperatureLow: {
    fontSize: 32,
    color: '#3498db'
  },
	dayHumidity: {
    fontSize: 32,
    color: '#001aff'
  }

});