import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/RankStyles';
import LeaderboardList from '../../LeaderboardList/Leaderboardlist';

class RankScreen extends Component {
  RankScreenstate = {
    userName: 'Zeyad_Zaky',
    leaderboard: [
      {
        key: '1',
        flag: require('../../../assets/rankPage/Nasrcityteam.png'),
        name: 'Nasrcity team',
        points: 5000,
      },
      {
        key: '2',
        flag: require('../../../assets/rankPage/Maaditeam.png'),
        name: 'Maadi team',
        points: 4000,
      },
      {
        key: '3',
        flag: require('../../../assets/rankPage/Newcairoteam.png'),
        name: 'Newcairo team',
        points: 3000,
      },
      {
        key: '4',
        flag: require('../../../assets/rankPage/Mohandseenteam.png'),
        name: 'Mohandseen team',
        points: 2000,
      },
      {
        key: '5',
        flag: require('../../../assets/rankPage/Rehabteam.png'),
        name: 'Rehab team',
        points: 1000,
      },
      {
        key: '6',
        flag: require('../../../assets/rankPage/Zamalekteam.png'),
        name: 'Zamalek team',
        points: 1000,
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/newsfeedPage/BG.png')}
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
              <Text style={styles.username}>{this.RankScreenstate.userName}</Text>
            </ImageBackground>
          </View>
          <View style={styles.optionsBar}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/rankPage/Button1.png')}
                style={styles.optionsItem}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/rankPage/Button2.png')}
                style={styles.optionsItem}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/rankPage/Button3.png')}
                style={styles.optionsItem}
              ></Image>
            </TouchableOpacity>
          </View> */}
          <Image source={require('../../../assets/rankPage/Map.png')} style={styles.map}></Image>
          <View style={styles.leaderboard}>
            <LeaderboardList leaderboard={this.RankScreenstate.leaderboard}></LeaderboardList>
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
                style={styles.navItem}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/newsfeedPage/FootballCourt_nav.png')}
                style={styles.navItem}
              ></Image>
            </TouchableOpacity>
          </View> */}
        </ImageBackground>
      </View>
    );
  }
}

export default RankScreen;
