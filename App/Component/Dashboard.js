import React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import api from '../Utils/api';
import Profile from './Profile';

const styles = {
  container: {
    marginTop: 65, 
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24, 
    color: 'white',
    alignSelf: 'center'
  }
}

export default class Dashboard extends React.Component{
  makeBackground(btn){
    let obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    if (btn === 0) {
      obj.backgroundColor = '#48BBEC';
    }
    else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    }
    else if (btn === 2) {
      obj.backgroundColor = '#758BF4';
    }

    return obj;
  }

  goToProfile(){
    this.props.navigator.push({
      title: 'Profile Page',
      component: Profile,
      passProps: { userInfo: this.props.userInfo }
    });
  }
  goToRepos(){

  }
  goToNotes(){

  }
  render(){
    return(
      <View style = {styles.container}>
        <Image source = {{uri: this.props.userInfo.avatar_url}} style = {styles.image}/>
        <TouchableHighlight
        style = {this.makeBackground(0)}
          onPress = {this.goToProfile.bind(this)}
          underlayColor = '#88D4E5'>
            <Text style = {styles.buttonText}> View Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
        style = {this.makeBackground(1)}        
          onPress = {this.goToRepos.bind(this)}
          underlayColor = '#88D4E5'>
            <Text style = {styles.buttonText}> View Repos </Text>
        </TouchableHighlight> 
        <TouchableHighlight
        style = {this.makeBackground(2)}        
          onPress = {this.goToNotes.bind(this)}
          underlayColor = '#88D4E5'>
            <Text style = {styles.buttonText}> View Notes </Text>
        </TouchableHighlight>                   
      </View>
    )
  }
};