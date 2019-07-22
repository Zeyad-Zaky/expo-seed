import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    resizeMode: "stretch"
  },
  topBar: {
    maxHeight: "12%",
    marginBottom: "8%",
    // marginTop: '10%',
    // width: '100%',
    // flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  menu: {
    marginLeft: "20%",
    marginTop: "20%",
    width: "50%",
    height: "50%",
    resizeMode: "stretch"
  },
  playercard: {
    width: "90%",
    height: "110%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  playercardImage: {
    resizeMode: "stretch"
  },
  profilepicture: {
    marginBottom: "35%",
    height: "65%",
    width: "20%",
    resizeMode: "stretch"
  },
  username: {
    marginLeft: "5%",
    marginBottom: "70%",
    width: "75%",
    height: "30%",
    color: "yellow"
  },
  newsfeed: {
    marginBottom: "10%",
    maxHeight: "70%",
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  navbar: {
    marginLeft: "15%",
    maxHeight: "10%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  navItem: {
    marginRight: "20%",
    resizeMode: "stretch"
  },
  earthItem: {
    marginRight: "20%",
    width: 50,
    height: 50,
    resizeMode: "stretch"
  },
  footballCourt: {
    marginRight: "20%",
    width: 50,
    height: 37,
    resizeMode: "stretch"
  },
  // qrcodeFrame:{
  //   // width: '50%',
  //   // height: '50%',
  //   maxWidth: '75%',
  //   maxHeight: '60%',
  //   resizeMode: 'stretch',
  //   marginTop: '20%',
  //   position: 'relative',
  // },
  qrcode: {
    // width: '70%',
    // height: '70%',
    maxWidth: "75%",
    maxHeight: "66%",
    resizeMode: "stretch",
    // marginLeft: '6%',
    marginTop: "-10%"
    // position: 'relative',
  },
  pitch: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 17,
    color: "#fff",
    position: "absolute",
    marginTop: "45%"
  },
  admin: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 17,
    color: "#fff",
    position: "absolute",
    marginTop: "52%"
  },
  time: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 17,
    color: "#fff",
    position: "absolute",
    marginTop: "59%"
  },
  duration: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: Dimensions.get("window").width / 17,
    color: "#fff",
    position: "absolute",
    marginTop: "66%"
  }
});