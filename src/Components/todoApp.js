import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal, Image, ActivityIndicator } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import colors from  '../Colors';
import TodoList from './TodoList';
import AddListModal from './AddListModal';
import Fire from '../database/Fire';


export default class todoApp extends React.Component {
  state= {
    addTodoVisible: false,
    lists: [],
    user : {},
    loading: true
  }

  componentDidMount() {
    console.ignoredYellowBox = ['Setting a timer'];
    firebase = new Fire((error, user) => {
      if (error) {
        return alert("Oops, algum erro aconteceu!")
      }

      firebase.getLists(lists => {
        this.setState({lists, user}, () => {
          this.setState({loading: false});
        });
      });

      this.setState({user});
    });
  }

  componentWillUnmount() {
    firebase.detach();
  }

  toggleAddTodoModal() {
    this.setState({addTodoVisible: !this.state.addTodoVisible})
  }

  renderList = list => {
    return <TodoList list={list} updateList={this.updateList} />
  };

  addList = list => {
    firebase.addList({
      name: list.name,
      color: list.color,
      todos: []
    })
  };

  updateList = list => {
    firebase.updateList(list)
  }

  render() {
    if (this.state.loading) {
      return(
        <View style={styles.container}>
          <ActivityIndicator size="large" color={colors.blue} />
        </View>
      )
    }
  return (
    <View style={styles.container}>
      <Modal 
        animationType="slide" 
        visible={this.state.addTodoVisible} 
        onRequestClose={() => this.toggleAddTodoModal()}
      >

        <AddListModal closeModal={() => this.toggleAddTodoModal()} addList={this.addList} />
      </Modal>
      <View>
        
      </View>
      <View style={{flexDirection: "row"}}>
        <View style={styles.divider} />
          <Image source={require('../../assets/logo.png')} style={{width: 200, height: 150}} />
        <View style={styles.divider} />
      </View>

      <View style={{height: 275, paddingLeft: 32}}>
        <FlatList 
          data={this.state.lists} 
          keyExtractor={item => item.id.toString()} 
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          renderItem={({item}) => this.renderList(item)}
          keyboardShouldPersistTaps="always"
        />
      </View>

      <View style={{marginVertical: 48, top: 30}}>
        <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
          <AntDesign name="plus" size={16} color={colors.gray} />
        </TouchableOpacity>

        <Text style={styles.add}>Adicionar Lista</Text>
      </View>
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
    backgroundColor: colors.lightGray,
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.black,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  add: {
    color: colors.black,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8 
  }
});