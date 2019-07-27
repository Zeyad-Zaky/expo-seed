import React, { Component } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import styles from "../styles/MatchInfoStyles";


const BACKGROUND = require("assets/matchInfoPage/BG.png");
const ADMIN = require("assets/matchInfoPage/admin.png");
const MATCH_OVERVIEW_CARD = require("assets/matchInfoPage/box.png");
const PLAYERS_CARD = require("assets/matchInfoPage/container_header.png");
const REQUEST_BUTTON = require("assets/matchInfoPage/button.png");
const COVER = require("assets/matchInfoPage/cover.png");
const LEVEL = require("assets/matchInfoPage/level.png");
const SEPERATOR = require("assets/matchInfoPage/seperator.png");
const NEXT_BUTTON = require("assets/matchInfoPage/next.png");
const PLAYER1 = require("assets/matchInfoPage/player.png");
const PLAYER2 = require("assets/matchInfoPage/player2.png");
const PLAYER3 = require("assets/matchInfoPage/player3.png");

export default class matchInfoScreen extends Component {

  state = {
    username: "Zeyad Yasser",
    levelProgress: 100,
    matchNumber: 12876,
    matchDay: 9,
    matchDayName: "Tuesday",
    matchMonth: "July",
    matchStartHour: 14,
    matchStartMinute: 0,
    matchEndHour: 15,
    matchEndMinute: 0,
    matchPrice: 100,
    payementMethod: "Cash",
    pitchLocation: "Nasr City",
    pitchName: "elwafaa wl amal",
    // adminName: "Omar",
    player1: {
      firstName: "Omar",
      level: 17,
      photo: ADMIN
    },
    player2: {
      firstName: "Salah",
      level: 19,
      photo: PLAYER1
    },
    player3: {
      firstName: "Ronaldo",
      level: 20,
      photo: PLAYER2
    },
    player4: {
      firstName: "Messi",
      level: 19,
      photo: PLAYER3
    }

  };

  render() {
    return (
      <View
        style={styles.container}>

        <ImageBackground
          source={BACKGROUND}
          style={styles.background}
          imageStyle={styles.backgroundImage}>

          <View style={styles.upBar}>

          </View>

          <View style={styles.matchContainer}>
            {/*<Text style={{ height:"100%", width:"100%"}}/>*/}
            <Text style={styles.match}>
              Match #{this.state.matchNumber}
            </Text>

            <Image source={SEPERATOR} style={styles.separator}></Image>

          </View>

          <ImageBackground source={COVER} style={styles.coverContainer} imageStyle={styles.cover}>

            <View style={styles.pitchNameContainer}>
              <Text style={styles.pitchName}>
                {this.state.pitchName}, {this.state.pitchLocation}
              </Text>
            </View>

          </ImageBackground>

          <View style={styles.overviewViewContainer}>
            <ImageBackground source={MATCH_OVERVIEW_CARD} style={styles.overviewContainer} imageStyle={styles.overview}>

              <View style={styles.overviewDetails1}>
                <Text style={styles.overviewTextArticle}>
                  Match Overview
                </Text>
              </View>

              <View style={styles.overviewDetails2}>
                <Text style={styles.overviewTextWhite}>
                  Date:{" "}
                </Text>
                <Text style={styles.overviewTextYellow}>
                  {this.state.matchDayName}, {this.state.matchMonth} {this.state.matchDay}
                </Text>

              </View>
              <View style={styles.overviewDetails2}>
                <Text style={styles.overviewTextWhite}>
                  Start:{" "}
                </Text>
                {this.state.matchStartHour > 12 ?
                  <Text style={styles.overviewTextYellow}> {this.state.matchStartHour - 12}</Text> :
                  <Text style={styles.overviewTextYellow}> {this.state.matchStartHour}</Text>}

                {this.state.matchStartMinute < 10 ?
                  <Text style={styles.overviewTextYellow}>{":0"}{this.state.matchStartMinute}</Text> :
                  <Text style={styles.overviewTextYellow}>:{this.state.matchStartMinute}</Text>}

                {this.state.matchStartHour > 12 ?
                  <Text style={styles.overviewTextYellow}> pm </Text> :
                  <Text style={styles.overviewTextYellow}> am </Text>}

                <Text style={styles.overviewTextWhite}>
                  {" , "}Ends:{" "}
                </Text>

                {this.state.matchEndHour > 12 ?
                  <Text style={styles.overviewTextYellow}> {this.state.matchEndHour - 12}</Text> :
                  <Text style={styles.overviewTextYellow}> {this.state.matchEndHour}</Text>}

                {this.state.matchEndMinute < 10 ?
                  <Text style={styles.overviewTextYellow}>{":0"}{this.state.matchEndMinute}</Text> :
                  <Text style={styles.overviewTextYellow}>:{this.state.matchEndMinute}</Text>}

                {this.state.matchEndHour > 12 ?
                  <Text style={styles.overviewTextYellow}> pm </Text> :
                  <Text style={styles.overviewTextYellow}> am </Text>}

              </View>

              <View style={styles.overviewDetails2}>
                <Text style={styles.overviewTextWhite}>
                  Session Price:{" "}
                </Text>
                <Text style={styles.overviewTextYellow}>
                  {this.state.matchPrice} LE.
                </Text>
              </View>

              <View style={styles.overviewDetails3}>
                <Text style={styles.overviewTextWhite}>
                  Payment Method:{" "}
                </Text>
                <Text style={styles.overviewTextYellow}>
                  {this.state.payementMethod}
                </Text>
              </View>

            </ImageBackground>
          </View>


          <ImageBackground source={PLAYERS_CARD} style={styles.playersCardContainer} imageStyle={styles.overview}>


            <View style={styles.overviewDetails1}>
              <Text style={styles.overviewTextArticle}>
                View Players
              </Text>
            </View>

            <View style={styles.playersContainer}>


              <View style={styles.playerCard}>
                <ImageBackground source={this.state.player1.photo} style={styles.playerImageContainer}
                                 imageStyle={styles.playerImage}>
                  <ImageBackground source={LEVEL} style={styles.playerLevelContainer}
                                   imageStyle={styles.playerLevelImage}>
                    <View style={styles.playerLevelTextContainer}>
                      <Text style={styles.playerLevelText}>
                        {this.state.player1.level}
                      </Text>
                    </View>
                  </ImageBackground>

                </ImageBackground>
                <View style={styles.playerName}>
                  <Text style={styles.playerNameText}>
                    {this.state.player1.firstName}
                  </Text>
                </View>

              </View>


              <View style={styles.playerCard}>
                <ImageBackground source={this.state.player2.photo} style={styles.playerImageContainer}
                                 imageStyle={styles.playerImage}>
                  <ImageBackground source={LEVEL} style={styles.playerLevelContainer}
                                   imageStyle={styles.playerLevelImage}>
                    <View style={styles.playerLevelTextContainer}>
                      <Text style={styles.playerLevelText}>
                        {this.state.player2.level}
                      </Text>
                    </View>
                  </ImageBackground>

                </ImageBackground>
                <View style={styles.playerName}>
                  <Text style={styles.playerNameText}>
                    {this.state.player2.firstName}
                  </Text>
                </View>

              </View>


              <View style={styles.playerCard}>
                <ImageBackground source={this.state.player3.photo} style={styles.playerImageContainer}
                                 imageStyle={styles.playerImage}>
                  <ImageBackground source={LEVEL} style={styles.playerLevelContainer}
                                   imageStyle={styles.playerLevelImage}>
                    <View style={styles.playerLevelTextContainer}>
                      <Text style={styles.playerLevelText}>
                        {this.state.player3.level}
                      </Text>
                    </View>
                  </ImageBackground>

                </ImageBackground>
                <View style={styles.playerName}>
                  <Text style={styles.playerNameText}>
                    {this.state.player3.firstName}
                  </Text>
                </View>

              </View>


              <View style={styles.playerCard}>
                <ImageBackground source={this.state.player4.photo} style={styles.playerImageContainer}
                                 imageStyle={styles.playerImage}>
                  <ImageBackground source={LEVEL} style={styles.playerLevelContainer}
                                   imageStyle={styles.playerLevelImage}>
                    <View style={styles.playerLevelTextContainer}>
                      <Text style={styles.playerLevelText}>
                        {this.state.player4.level}
                      </Text>
                    </View>
                  </ImageBackground>

                </ImageBackground>
                <View style={styles.playerName}>
                  <Text style={styles.playerNameText}>
                    {this.state.player4.firstName}

                  </Text>
                </View>

              </View>


            </View>

          </ImageBackground>


          <View style={styles.requestButtonViewContainer}>
            <ImageBackground source={REQUEST_BUTTON} style={styles.requestButtonContainer}
                             imageStyle={styles.requestShape}>
              <View style={styles.requestButton}>
                <Text style={styles.request}>
                  Request
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.buttomBar}>
            <Text style={{ height: "100%", width: "100%" }}/>
          </View>


        </ImageBackground>
      </View>
    );
  }
}