import React from 'react';
import {View, FlatList, Text} from 'react-native';

export default class Weather extends React.Component {

  state = {
    data: []
  }

  getWeather= () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=porto&appid=c6ec03cad8423bfa39130906126ceada')
      .then( res => res.json())
      .then(res => {
        this.setState({
          data: res.weather ||[]
        })
        
        console.log(res.weather)
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
              <Text style={{color: 'white', paddingTop: 5}}>{item.description}</Text>        
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}