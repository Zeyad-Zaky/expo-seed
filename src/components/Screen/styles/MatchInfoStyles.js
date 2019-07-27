import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({

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
    height: "25%",
    width: "80%",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  cover: {
    // flex: 1,
    // resizeMode: "stretch",
    height: "100%",
    width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
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
    height: "17.25%",
    width: "95%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"

  },
  overviewDetails2: {
    height: "20.5%",
    width: "95%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"

  },
  overviewDetails3: {
    height: "20.75%",
    width: "95%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  overviewTextArticle: {
    // fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 28,
    color: "#000000"

  },
  overviewTextWhite: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 25,
    color: "#fff"
  },
  overviewTextYellow: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 25,
    color: "#efc41c"
  },
  playersCardContainer: {
    alignItems: "flex-end",
    // justifyContent: "flex-end",
    height: "20%",
    width: "85%"
  },
  playersContainer: {
    width: "95%",
    height: "82.75%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  playerCard: {
    height: "80%",
    width: "23%",
    alignItems: "center",
    justifyContent: "center"
  },
  playerImageContainer: {
    height: 50,
    width: 50,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  playerName: {
    height: "39%",
    width: "75%",
    alignItems: "center",
    justifyContent: "center"
  },
  playerNameText: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 28,
    color: "#fff"
  },
  playerImage: {
    // height: "100%",
    // width: "100%"
    flex: 1,
    resizeMode: "stretch"
  },
  playerLevelContainer: {
    width: "32%",
    height: "32%"
  },
  playerLevelImage: {
    width: "100%",
    height: "100%"
  },
  playerLevelTextContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  playerLevelText: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 34,
    color: "#fff"
  },
  requestButtonViewContainer: {
    height: "8%",
    width: "25%",
    alignItems: "center",
    justifyContent: "center"
  },
  requestButtonContainer: {
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  requestButton: {
    alignItems: "center",
    justifyContent: "center"
  },
  requestShape: {
    borderRadius: 5,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  request: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 25,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttomBar: {
    height: "9.2%",
    width: "100%"
  }


});