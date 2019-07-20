import React, { Component } from 'react';
import { AppRegistry, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/JoinMatchesStyles';
import { Button } from 'react-native';
import { Font, AppLoading } from "expo";
import NavBar from '../../../reusable/NavBar';


const BACKGROUND = require('assets/createMatchPage/BG.png');
const MENU_LOGO = require('assets/newsfeedPage/MENU.png');
const PLAYER_CARD_LOGO = require('assets/createMatchPage/PlayerCard.png');
const MATCH1 = require('assets/JoinMatchPage/1.png');
const MATCH2 = require('assets/JoinMatchPage/2.png');
const MATCH3 = require('assets/JoinMatchPage/3.png');
const MATCH4 = require('assets/JoinMatchPage/4.png');
const FILTER = require('assets/JoinMatchPage/filter.png');
const SEARCH = require('assets/JoinMatchPage/search.png');





class JoinMatches extends Component {
  constructor() {
    super()
    this.state = {
      userName: 'Abdo',
    };
  }

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
        <View style= {styles.PageView}>
        <View style={styles.searchBar}>
          <Image source={SEARCH} style={styles.searchBarImage} />
          <TouchableOpacity style={styles.touchableFilterImage}>
          <Image source={FILTER}  style={styles.filterImage}/>
          </TouchableOpacity>
          </View>
       
        <View style={styles.MatchView}>
        <View style= {styles.touchableMatchBackground}>
        <TouchableOpacity>
        <Image source={MATCH1}  style={styles.MatchBackground}></Image> 
        <Text style={styles.MatchNumberTXT}>Match #013829</Text>
        <Text style={styles.MatchLocTXT}>El-Ahly Pitch, Nasr City</Text>
        <Text style={styles.MatchDateTXT}>Date :  <Text style={styles.ResponseText}>Tuesday, July 9</Text></Text>
        <Text style={styles.MatchStartTXT}>Starts : <Text style={styles.ResponseText}>2:00 PM</Text></Text>
        <Text style={styles.MatchEndTXT}>End : <Text style={styles.ResponseText}>3:00 PM</Text></Text>
        <Text style={styles.MatchAdminTXT}>Admin : <Text style={styles.ResponseText}>Abdelrahman</Text></Text>
        </TouchableOpacity>
        </View>
        <View style= {styles.touchableMatchBackground}>
        <TouchableOpacity>
        <Image source={MATCH2}  style={styles.MatchBackground}></Image> 
        <Text style={styles.MatchNumberTXT}>Match #013829</Text>
        <Text style={styles.MatchLocTXT}>El-Ahly Pitch, Rehab City</Text>
        <Text style={styles.MatchDateTXT}>Date :  <Text style={styles.ResponseText}>Tuesday, July 9</Text></Text>
        <Text style={styles.MatchStartTXT}>Starts : <Text style={styles.ResponseText}>2:00 PM</Text></Text>
        <Text style={styles.MatchEndTXT}>End : <Text style={styles.ResponseText}>3:00 PM</Text></Text>
        <Text style={styles.MatchAdminTXT}>Admin : <Text style={styles.ResponseText}>Abdelrahman</Text></Text>
        </TouchableOpacity>
        </View>
        <View style= {styles.touchableMatchBackground}>
        <TouchableOpacity>
        <Image source={MATCH3}  style={styles.MatchBackground}></Image> 
        <Text style={styles.MatchNumberTXT}>Match #013829</Text>
        <Text style={styles.MatchLocTXT}>El-Ahly Pitch, Heliopolis</Text>
        <Text style={styles.MatchDateTXT}>Date :  <Text style={styles.ResponseText}>Tuesday, July 9</Text></Text>
        <Text style={styles.MatchStartTXT}>Starts : <Text style={styles.ResponseText}>2:00 PM</Text></Text>
        <Text style={styles.MatchEndTXT}>End : <Text style={styles.ResponseText}>3:00 PM</Text></Text>
        <Text style={styles.MatchAdminTXT}>Admin : <Text style={styles.ResponseText}>Abdelrahman</Text></Text>
        </TouchableOpacity>
        </View>
        <View style= {styles.touchableMatchBackground}>
        <TouchableOpacity>
        <Image source={MATCH4}  style={styles.MatchBackground}></Image> 
        <Text style={styles.MatchNumberTXT}>Match #013829</Text>
        <Text style={styles.MatchLocTXT}>El-Ahly Pitch, New Cairo</Text>
        <Text style={styles.MatchDateTXT}>Date :  <Text style={styles.ResponseText}>Tuesday, July 9</Text></Text>
        <Text style={styles.MatchStartTXT}>Starts : <Text style={styles.ResponseText}>2:00 PM</Text></Text>
        <Text style={styles.MatchEndTXT}>End : <Text style={styles.ResponseText}>3:00 PM</Text></Text>
        <Text style={styles.MatchAdminTXT}>Admin : <Text style={styles.ResponseText}>Abdelrahman</Text></Text>
        </TouchableOpacity>
        </View>         
        </View>
        </View>
        <NavBar />
      </ImageBackground>
    </View>
    );
  }
}

export default JoinMatches;
