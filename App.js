import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal, Image, ActivityIndicator } from 'react-native';
import TodoApp from './Components/todoApp';

export default class App extends React.Component {

  render() {
      return(
    <View style={styles.container}>
      <TodoApp />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  add: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8 
  }
});
