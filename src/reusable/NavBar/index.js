import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';


const LEADERBOARD = require('../../assets/NavIcons/LeaderBoard.png');
const MATCHES = require('../../assets/NavIcons/Matches.png');
const NEWSFEED = require('../../assets/NavIcons/News-Feed.png');
const SCOUT = require('../../assets/NavIcons/Scout.png');
const TEAMS = require('../../assets/NavIcons/Teams.png');


class CreateMatch extends Component {
  render() {
    return (
    <View style={styles.navbar}>
    <TouchableOpacity>
      <Image source={LEADERBOARD} style={styles.navItem}></Image>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={MATCHES} style={styles.navItem}></Image>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={NEWSFEED} style={styles.navItem}></Image>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={SCOUT} style={styles.navItem}></Image>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={TEAMS} style={styles.navItem}></Image>
    </TouchableOpacity>
  </View>
    );
  }
}

export default CreateMatch;
