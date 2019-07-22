import React, { Component } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
// import styles from "../styles/MatchInfoStyles";


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
    pitchName: "elwafaa wel amal",
    adminName: "Omar",
    player1name: "Salah",
    player2name: "Ronaldo",
    player3name: "Messi"
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

              <View style={styles.overviewDetails3}>
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

              <View style={styles.overviewDetails1}>
                <Text style={styles.overviewTextWhite}>
                  Payment Method:{" "}
                </Text>
                <Text style={styles.overviewTextYellow}>
                  {this.state.payementMethod}
                </Text>
              </View>

            </ImageBackground>
          </View>


          <ImageBackground source={PLAYERS_CARD} style={styles.playersContainer} imageStyle={styles.overview}>

            <View style={styles.overviewDetails3}>
              <Text style={styles.overviewTextArticle}>
                View Players
              </Text>
              {/*<Text style={{ height:"100%", width:"100%"}}/>*/}
            </View>

            <View style={styles.playersView}>
              {/*<ImageBackground style={styles.playersBackground}>*/}
              {/*</ImageBackground>*/}

              {/*<View style={{height: "100%", width:"20%"}}>*/}
              {/*  <Text style={{ height:"100%", width:"100%"}}/>*/}
              {/*</View>*/}

            </View>

          </ImageBackground>


          <View style={styles.requestButtonViewContainer}>
            <ImageBackground source={REQUEST_BUTTON} style={styles.requestButtonContainer} imageStyle={styles.overview}>
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

const styles = StyleSheet.create({

  container: {
    flex: 1
  },
  background: {
    flex: 1,
    alignItems: "center"
    // justifyContent: "center"
  },
  backgroundImage: {
    resizeMode: "stretch"
  },
  upBar: {
    height: "9.2%",
    width: "100%"
  },
  matchContainer: {
    height: "7.8%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  match: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 15,
    color: "#fff",
    height: "60%"
  },
  separator: {
    width: "50%",
    height: "7%"
    // borderWidth: 1
  },
  coverContainer: {
    // flex: 1,
    height: "22%",
    width: "80%",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  cover: {
    // flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  pitchNameContainer: {
    width: "42.5%",
    height: "11.5%",
    justifyContent: "center",
    alignItems: "center"
  },
  pitchName: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 37,
    color: "#fff"
    // width: "100%",
    // height: "100%",
  },
  overviewViewContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "22%",
    width: "85%"
  },
  overviewContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    height: "90%",
    width: "100%"
  },
  overview: {
    borderRadius: 10,
    height: "100%",
    width: "100%"
  },
  overviewDetails1: {
    height: "23%",
    width: "95%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row"

  },
  overviewDetails2: {
    height: "19%",
    width: "95%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row"

  },
  overviewDetails3: {
    height: "20%",
    width: "95%",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  overviewTextArticle: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 25,
    color: "#000000"

  },
  overviewTextWhite: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 20,
    color: "#fff"
  },
  overviewTextYellow: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 20,
    color: "#efc41c"
  },
  playersContainer: {
    alignItems: "flex-end",
    // justifyContent: "flex-end",
    height: "20%",
    width: "85%"
  },
  playersView:{
    height: "80%",
    width: "85%",
  },
  playersBackground:{

  },
  playersBackgroundImage:{

  },
  requestButtonViewContainer: {
    height: "10%",
    width: "40%",
    alignItems: "center",
    justifyContent: "center"
  },
  requestButtonContainer: {
    height: "50%",
    width: "100%"
  },
  requestButton: {
    alignItems: "center",
    justifyContent: "center"
  },
  request: {
    height: "100%",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 15,
    color: "#fff"
  },
  buttomBar: {
    height: "9.2%",
    width: "100%"
  }


});