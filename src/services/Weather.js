import React from 'react';
import {View, FlatList, Text} from 'react-native';

export default class Time extends React.Component {

  state = {
    data: []
  }

  getWeather= () => {
    fetch('http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1030300.json')
      .then( res => res.json())
      .then(res => {
        this.setState({
          data: res.data ||[]
        })
      })
  }

  componentDidMount() {
    this.getWeather()
  }


  render() {
    return(
      <View>
        <FlatList 
          data={this.state.data}
          renderItem={({item}) => (
            <View>
              <Text>{item.tMax}</Text>
              <Text>{item.tMin}</Text>
            </View>
          )}
          keyExtractor={item => item.latitude}
        />
      </View>
    );
  }
}