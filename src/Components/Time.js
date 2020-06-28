import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Time extends React.Component {
  state = {
    time: ''
  };

  componentDidMount() {
    let hours = new Date().getHours(); 
    let min = new Date().getMinutes(); 
    let hoursMin = (hours*1440)/24;
    let hour = hoursMin+min;
    let time = (hour*100)/1400;
    time = Math.round(time) 

    this.setState({time});
    
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.hours} >{this.state.time}</Text>
        <Text style={styles.perc} >%</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  hours: {
    fontSize: 80,
    color: 'white',
    paddingTop: 50
  },
  perc: {
    fontSize: 40,
    color: 'white',
    paddingTop: 90
  }
})