import React from 'react';
import {View, FlatList, Text} from 'react-native';

export default class Weather extends React.Component {

  state = {
    data: [],
    weatherState: []
  }

  getWeather= () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=41.278607&lon=-8.373341&appid=c6ec03cad8423bfa39130906126ceada')
      .then( res => res.json())
      .then(res => {
        this.setState({
          data: Math.round(res.main.temp-273)  ||[],
          weatherState: res.weather || []
        })
        // console.log(res.main.temp-273)
        // console.log(res.weather.description)
      })
  }

  componentDidMount() {
    this.getWeather()
  }


  render() {
    return(
      <View>
        {/* <Text style={{color: 'white', paddingTop: 5}}>{this.state.data}°C {this.state.weatherState.description}</Text> */}
        <FlatList 
          data={this.state.weatherState}
          renderItem={({item}) => (
            <View>
              <Text style={{color: 'white', paddingTop: 5}}>{item.description} | {this.state.data}°C</Text>        
            </View>
          )}
            keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}