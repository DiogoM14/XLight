import React from 'react';
import {SafeAreaView, StatusBar, TouchableOpacity, } from 'react-native';
import styled from 'styled-components';
import {Feather} from '@expo/vector-icons';

import Time from './Time';
import Weather from '../services/Weather';
 

export default function mainScreen({navigation}) {
  

  const states = [
    {
      name: 'Modo Leitura',
      image: require("../../assets/low.jpg")
    },
    {
      name: 'Modo Normal',
      image: require("../../assets/normal.jpg")
    },
    {
      name: 'Modo Potência',
      image: require("../../assets/high.jpg")
    }
  ]  

  return (
    <Container>

      <StatusBar barStyle="light-content" />
      <Background source={require('../../assets/background.jpg')}>
        <SafeAreaView>
          <MenuBar style={{marginTop: 5}}>
            <Back>
              <TouchableOpacity>
                <Feather name="user" size={23} color="#fff" />
              </TouchableOpacity>
                <Text style={{marginLeft: 10}}>Diogo</Text>
            </Back>
            <TouchableOpacity>
              <Feather name="settings" size={23} color="#fff" />
            </TouchableOpacity>
          </MenuBar>
          <ClockContainer>
            <Time />
          </ClockContainer>
          <MainMsg>
            <Text title bold>Bem Vindo de Volta!</Text>
            <Divider />
            <Text heavy>"Nada é dificil se for dividido em pequenas partes."</Text>
            <WeatherContainer>
              <Weather />
            </WeatherContainer>
          </MainMsg>
          <Button>
            <Text>Ver Mais</Text>
          </Button>
        </SafeAreaView>
      </Background>
      <MainContainer>
        <Text dark heavy large>Controlo de Luminosidade</Text>
        <Modes>
          {states.map((states, index) => {
            return(
              <Mode key={index}>
                <TouchableOpacity>
                  <ModeImage source={states.image} />
                </TouchableOpacity>
                <ModeInfo>
                  <Text dark heavy>{states.name}</Text>
                </ModeInfo>
              </Mode>
            ); 
          })}
          <OffButton>
            <TurnOff>
              <Text>Desligar</Text>
            </TurnOff>
          </OffButton>
        </Modes>
      </MainContainer>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Text = styled.Text`
  color: ${(props) => props.dark ? "#000" : "#fff"};

  ${({title, large, small}) => {
    switch(true) {
      case title:
        return `font-size: 32px`;
      case large:
        return `font-size: 20px`;
      case small:
        return `font-size: 13px`;
    }
  }}

  ${({bold, heavy}) => {
    switch(true) {
      case bold:
        return `font-weight: 600`;
    case heavy:
        return `font-weight: 700`;
    }
  }}
`;

const Background = styled.ImageBackground`
  width: 100%;
`;

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ClockContainer = styled.View`
  background-color: transparent;
  width: 100%;
  height: 200px;
  align-items: center;
`;

const MainMsg = styled.View`
  padding: 0 32px;
  margin: 20px 0 32px 0;
`;

const Divider = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`;
const WeatherContainer = styled.View`

`;

const Button = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color: rgba(255, 255, 255, 0.3);
  align-self: flex-start;
  padding: 6px 18px;
  border-radius: 4px;
`;

const MainContainer = styled.ScrollView`
  margin-top: -20px;
  padding: 10px 23px 0 23px;
  /* padding: 32px; */
  background-color: #fff;
  border-top-left-radius: 24px;
`;

const Modes = styled.View`
  margin-top: 16px;
`;

const Mode = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const ModeImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 4px;
`;

const ModeInfo = styled.View`
  flex: 1;
  margin-left: 12px;
`;

const OffButton = styled.View`
  padding-top: 20px;
  align-items: center;
`;

const TurnOff = styled.TouchableOpacity`
  width: 80%;
  height: 60px;
  background-color: rgba(192, 57, 43,1.0);
  border-radius: 4px;
  align-items: center;  
  justify-content: center;
`;