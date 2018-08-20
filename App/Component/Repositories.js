import React from 'react';
import Badge from './Badge';
import Separator from './Helpers/Separator';
import Web_View from './Helpers/WebView';
import { ScrollView, Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

export default class Repositories extends React.Component {
  openPage(url){
    this.props.navigator.push({
      component: Web_View,
      title: 'Web View',
      passProps: {url}
    });
  }
  render(){
    let repos = this.props.repos;
    let list = repos.map((repo, index) => {
      let desc = repos[index].description ? <Text style = {styles.description}> {repos[index].description} </Text> : <View />;
      return (
        <View key = {repo.id}>
          <View style = {styles.rowContainer}>
            <TouchableHighlight
              onPress = {this.openPage.bind(this, repo.html_url)}
              underlayColor = 'transparent'>
              <Text style = {styles.name}> {repo.name}</Text>
            </TouchableHighlight>
            <Text style = {styles.stars}> Stars: {repo.stargazers_count}</Text>
            {desc}
          </View>
          <Separator />
        </View>
      )
    })
    return (
      <ScrollView style = {styles.container}>
        <Badge userInfo = {this.props.userInfo} />
        {list}
      </ScrollView>
    )
  }
};

Repositories.propTypes = {
  userInfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired
};