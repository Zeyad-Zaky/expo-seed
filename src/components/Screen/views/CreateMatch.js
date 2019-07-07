import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/CreateMatchStyles';

const BACKGROUND = require('assets/createMatchPage/BG.png');
const PLAYER_CARD_LOGO = require('assets/createMatchPage/PlayerCard.png');
const RANK_NAV_ICON = require('assets/newsfeedPage/Rank_nav.png');
const EARTH_NAV_ICON = require('assets/newsfeedPage/Earth_nav.png');
const FOOTBALLCOURT_NAV_ICON = require('assets/newsfeedPage/FootballCourt_nav.png');
const MENU_LOGO = require('assets/newsfeedPage/MENU.png');


class CreateMatch extends Component {
  CreaeteMatchScreenstate = {
    userName: 'Abdo',
  };
  render() {
    return (

      <View style={styles.container}>
        <ImageBackground
          source={BACKGROUND}
          style={styles.background}
          imageStyle={styles.backgroundImage}
        >
          <View style={styles.topBar}>
            <TouchableOpacity>
              <Image source={MENU_LOGO} style={styles.menu}></Image>
            </TouchableOpacity>
            <Image source={PLAYER_CARD_LOGO} style={styles.playercard} />
          </View>
          <View style={styles.navbar}>
            <TouchableOpacity>
              <Image source={RANK_NAV_ICON} style={styles.navItem}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={EARTH_NAV_ICON} style={styles.earthItem}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={FOOTBALLCOURT_NAV_ICON} style={styles.footballCourt}></Image>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default CreateMatch;
