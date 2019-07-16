import React, { Component } from 'react';
import { AppRegistry, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/CreateMatchStyles';
import { Button } from 'react-native';
import { Font, AppLoading } from "expo";


const BACKGROUND = require('assets/createMatchPage/BG.png');
const PLAYER_CARD_LOGO = require('assets/createMatchPage/PlayerCard.png');
const RANK_NAV_ICON = require('assets/newsfeedPage/Rank_nav.png');
const EARTH_NAV_ICON = require('assets/newsfeedPage/Earth_nav.png');
const FOOTBALLCOURT_NAV_ICON = require('assets/newsfeedPage/FootballCourt_nav.png');
const MENU_LOGO = require('assets/newsfeedPage/MENU.png');
const PITCHCONTAINER = require('assets/createMatchPage/PitchContainer.png');
const SPECTATOR = require('assets/createMatchPage/seperator.png');
const PITCHGLOW = require('assets/createMatchPage/pitchGlow.png');
const NASRCITYTEAM = require('assets/rankPage/Nasrcityteam.png');
const MAADITEAM = require('assets/rankPage/Maaditeam.png');
const NEWCAIROTEAM = require('assets/rankPage/Newcairoteam.png');


const DAYCONTAINER = require('assets/createMatchPage/Daycontainer.png');
const DAYGLOW = require('assets/createMatchPage/dayGlow.png');
const CHOSEDAYS = require('assets/createMatchPage/chooseDays.png');



class CreateMatch extends Component {
 constructor(){
   super()
   this.state = {
    userName: 'Abdo',
    isPitchContainer: true
  };
  console.log(this.state)

 }

  changeContainerPitch()
  {
    this.setState({
      isPitchContainer: true
    })

  }
  changeContainerDay()
  {

    this.setState({
      isPitchContainer: false
    })
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
          {
            this.state.isPitchContainer ?
              <ImageBackground
                source={PITCHCONTAINER}
                style={styles.pitchContainer}
                imageStyle={styles.pitchContainerBG}
              >
                <View style={styles.teamView}>
                  <View style={styles.selectViewPitch}>
                    <TouchableOpacity onPress = {() => this.changeContainerPitch()}>
                      <Image source={PITCHGLOW} style={styles.select} ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <Text style={styles.selectText} onPress = {() => this.changeContainerDay()}>Day</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.selectText}>Time</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.teamInfo}>
                    <Text style={styles.selectTextN}>1</Text>
                    <ImageBackground source={NASRCITYTEAM} style={styles.teamImage} imageStyle={styles.teamImageStyle}></ImageBackground>
                    <Text style={styles.selectTextN1}>NasrCity Pitch</Text>
                    <Text style={styles.selectTextN1}>18KM</Text>
                  </View>
                  <ImageBackground source={SPECTATOR} style={styles.spectator} imageStyle={styles.spectatorImage}></ImageBackground>
                  <View style={styles.teamInfo}>
                    <Text style={styles.selectTextN}>2</Text>
                    <ImageBackground source={MAADITEAM} style={styles.teamImage} imageStyle={styles.teamImageStyle}></ImageBackground>
                    <Text style={styles.selectTextN1}>NasrCity Pitch</Text>
                    <Text style={styles.selectTextN1}>5KM</Text>
                  </View>
                  <ImageBackground source={SPECTATOR} style={styles.spectator} imageStyle={styles.spectatorImage}></ImageBackground>
                  <View style={styles.teamInfo}>
                    <Text style={styles.selectTextN}>3</Text>
                    <ImageBackground source={NEWCAIROTEAM} style={styles.teamImage} imageStyle={styles.teamImageStyle}></ImageBackground>
                    <Text style={styles.selectTextN1}>NasrCity Pitch</Text>
                    <Text style={styles.selectTextN1}>11KM</Text>
                  </View>
                  <ImageBackground source={SPECTATOR} style={styles.spectator} imageStyle={styles.spectatorImage}></ImageBackground>
                </View>
              </ImageBackground> :
              <ImageBackground
                source={DAYCONTAINER}
                style={styles.dayContainer}
                imageStyle={styles.dayContainerBG}
              >
                <View style={styles.selectViewDay}>
                  <TouchableOpacity onPress = {() =>this.changeContainerPitch()}>
                    <Image source={PITCHGLOW} style={styles.select} ></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() =>this.changeContainerDay()}>
                    <Text style={styles.selectText} >Day</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.selectText}>Time</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <ImageBackground source={CHOSEDAYS} style={styles.chooseDays}></ImageBackground>
                </TouchableOpacity>
              </ImageBackground>
          }




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
