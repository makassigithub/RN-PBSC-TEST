import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import _ from 'lodash';

import Header from './components/header';
import Content from './components/content';
import Button from './components/button';
import {COLORS} from './constants';


export default class App extends Component{
  state = { 
    profileData: {},
    count: 0,
    isLoading: true,
  };

  componentDidMount(){
    this.getProfileData();
  }

  getProfileData = ()=> {
    fetch(`https://randomuser.me/api/`)
    .then(data=> data.json())
    .then(profileData => 
      this.setState({
        profileData: _.get(profileData,'results[0]') || {},
        isLoading: false,
      }));
  }

  goNextCycle =  flag => {
    const { count } = this.state;

    this.setState({
      isLoading: true,
      count: (flag ==='#' && count+1) || count,
    },
    ()=> this.getProfileData());
  }
   
  render() {
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header
            title='Gender Neutral Dating App'
            count={this.state.count}
          />
        </View>
        <View style={styles.content}>
          { this.state.isLoading ?
              <Text style={styles.loading}>Loading...</Text> :
              <Content {...this.state.profileData}/>}
        </View>
        <View style={styles.footer}>
          <Button
            title='No'
            color={COLORS.DARK_GREY}
            onClick={this.goNextCycle}
            disabled={this.state.isLoading}
          />
          <Button
            title='Yes'
            color={COLORS.ORANGE}
            onClick={()=> this.goNextCycle('#')}
            disabled={this.state.isLoading}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    borderWidth: 1,
  },
  header: {
    width: '100%',
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    flex:1,
    position: 'absolute',
    bottom: 0,
  },
  content:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading:{
    flex: 1,
  }
});
