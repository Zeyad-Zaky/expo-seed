import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/NewsfeedStyles';
import NewsfeedList from '../../NewsfeedList/NewsfeedList';

const LOGIN_BACKGROUND = require('assets/newsfeedPage/BG.png');
const MENU_LOGO = require('assets/newsfeedPage/MENU.png');
const PLAYER_CARD_LOGO = require('assets/newsfeedPage/PlayerCard.png');
const PIC_FRAME_LOGO = require('assets/newsfeedPage/PICFrame.png');
const RANK_NAV_ICON = require('assets/newsfeedPage/Rank_nav.png');
const EARTH_NAV_ICON = require('assets/newsfeedPage/Earth_nav.png');
const FOOTBALLCOURT_NAV_ICON = require('assets/newsfeedPage/FootballCourt_nav.png');

class NewsfeedScreen extends Component {
  NewsfeedScreenstate = {
    userName: 'Zeyad_Zaky',
    newsfeed: [
      {
        key: '1',
        title: 'Omar Elsayed',
        news: 'Omar reached 500 points',
      },
      {
        key: '2',
        title: 'Omar Elsayed',
        news: 'Omar reached 500 points',
      },
      {
        key: '3',
        title: 'Omar Elsayed',
        news: 'Omar reached 500 points',
      },
      {
        key: '4',
        title: 'Omar Elsayed',
        news: 'Omar reached 500 points',
      },
      {
        key: '5',
        title: 'Omar Elsayed',
        news: 'Omar reached 500 points',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={LOGIN_BACKGROUND}
          style={styles.background}
          imageStyle={styles.backgroundImage}
        >
          <View style={styles.topBar}>
            <TouchableOpacity>
              <Image source={MENU_LOGO} style={styles.menu}></Image>
            </TouchableOpacity>
            <ImageBackground
              source={PLAYER_CARD_LOGO}
              style={styles.playercard}
              imageStyle={styles.playercardImage}
            >
              <Image source={PIC_FRAME_LOGO} style={styles.profilepicture}></Image>
              <Text style={styles.username}>{NewsfeedScreen.state.userName}</Text>
            </ImageBackground>
          </View>
          <View style={styles.newsfeed}>
            <NewsfeedList newsfeed={NewsfeedScreen.state.newsfeed} />
          </View>
          <View style={styles.navbar}>
            <TouchableOpacity>
              <Image source={RANK_NAV_ICON} style={styles.navItem}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={EARTH_NAV_ICON} style={styles.navItem}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={FOOTBALLCOURT_NAV_ICON} style={styles.navItem}></Image>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default NewsfeedScreen;
