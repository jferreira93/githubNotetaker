import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import Main from './App/Component/Main';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: 'Github Notetaker',
          component: Main
        }} 
        style={styles.container}/>
    );
  }
}

