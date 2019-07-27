import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/MatchStyles';
import MatchoptionList from '../../MatchoptionList/MatchoptionList';

class MatchScreen extends Component {
  MatchScreenstate = {
    userName: 'Zeyad_Zaky',
    color: true,
    matchoption: [
      {
        key: '1',
        image: require('../../../assets/matchPage/Match-box1.png'),
        title: 'Start Match',
        content: 'Scan your QR code and start your pre-reserved match',
      },
      {
        key: '2',
        image: require('../../../assets/matchPage/Match-box2.png'),
        title: 'Join Match',
        content:
          'Search for a match with specific criteria or a match with your friends and Join it',
      },
      {
        key: '3',
        image: require('../../../assets/matchPage/Match-box3.png'),
        title: 'Create Match',
        content: 'Create your own match, reserve a pitch and let everyone or your friends join it',
      },
      {
        key: '4',
        image: require('../../../assets/matchPage/Match-box4.png'),
        title: 'Spectate Match',
        content: 'Follow the results of any match in Egypt',
      },
    ],
  };

  buttonHandler = () => {
    this.MatchScreenstate.color = !this.MatchScreenstate.color;
    // this.setState(prevState => {
    //   console.log(prevState);
    //   return {
    //     ...prevState,
    //     color: !prevState.color,
    //   };
    // });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/createMatchPage/BG.png')}
          style={styles.background}
        >
          {/* <View style={styles.topBar}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/newsfeedPage/MENU.png')}
                style={styles.menu}
              ></Image>
            </TouchableOpacity>
            <ImageBackground
              source={require('../../../assets/newsfeedPage/PlayerCard.png')}
              style={styles.playercard}
              imageStyle={styles.playercardImage}
            >
              <Image
                source={require('../../../assets/newsfeedPage/PICFrame.png')}
                style={styles.profilepicture}
              ></Image>
              <Text style={styles.username}>{this.state.userName}</Text>
            </ImageBackground>
          </View> */}
          <View style={styles.optionsBar}>
            <TouchableOpacity
              onPress={() => this.buttonHandler()}
              disabled={this.MatchScreenstate.color}
            >
              <Text
                style={[styles.option, { color: this.MatchScreenstate.color ? 'white' : 'grey' }]}
              >
                QuickMatch
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.buttonHandler()}
              disabled={!this.MatchScreenstate.color}
            >
              <Text
                style={[styles.option, { color: this.MatchScreenstate.color ? 'grey' : 'white' }]}
              >
                RankedMatch
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('../../../assets/matchPage/SeperatorMatch.png')}
            style={styles.seperator}
          ></Image>
          <View style={styles.matchOptions}>
            <MatchoptionList matchoption={this.MatchScreenstate.matchoption}></MatchoptionList>
          </View>
          {/* <View style={styles.navbar}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/newsfeedPage/Rank_nav.png')}
                style={styles.navItem}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/newsfeedPage/Earth_nav.png')}
                style={styles.earthItem}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/newsfeedPage/FootballCourt_nav.png')}
                style={styles.footballCourt}
              ></Image>
            </TouchableOpacity>
          </View> */}
        </ImageBackground>
      </View>
    );
  }
}

export default MatchScreen;
