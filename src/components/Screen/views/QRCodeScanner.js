import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../styles/QRCodeStyles';

// const RANK_NAV_ICON = require("assets/QRCodeScannerPage/Rank_nav.png");                   //USED
// const EARTH_NAV_ICON = require("assets/QRCodeScannerPage/Earth_nav.png");                 //USED
// const FOOTBALLCOURT_NAV_ICON = require("assets/QRCodeScannerPage/FootballCourt_nav.png"); //USED
// const PIC_FRAME_LOGO = require("assets/QRCodeScannerPage/PICFrame.png");                  //USED
// const MENU_LOGO = require("assets/QRCodeScannerPage/MENU.png");                           //USED
// const PLAYER_CARD_LOGO = require("assets/QRCodeScannerPage/PlayerCard.png");              //USED
const BACKGROUND = require('assets/QRCodeScannerPage/BG.png');                            //USED
const QRCODE = require('assets/QRCodeScannerPage/QR.png');                                //USED
// const QRCODE_FRAME = require("assets/QRCodeScannerPage/frame.png");

class QRCodeScannerScreen extends Component {
  // state = {
  //   username: "Zeyad Yasser",
  //   QRCode: QRCODE
  // };

  pressHandler = () => {
    const { navigation } = this.props;
    navigation.navigate('rating');
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <ImageBackground
          source={BACKGROUND}
          style={styles.background}
          imageStyle={styles.backgroundImage}
        >
          {/* <View style={styles.topBar}>
            <TouchableOpacity>
              <Image source={MENU_LOGO} style={styles.menu}></Image>
            </TouchableOpacity>
            <ImageBackground
              source={PLAYER_CARD_LOGO}
              style={styles.playercard}
              imageStyle={styles.playercardImage}
            >
              <Image source={PIC_FRAME_LOGO} style={styles.profilepicture}></Image>
              <Text style={styles.username}>{this.state.username}</Text>
            </ImageBackground>
          </View> */}
          <View style={{marginLeft: "-75%"}}>
            <Text style = {styles.pitch}>
              Pitch:
            </Text>
            <Text style = {styles.admin}>
              Admin:
            </Text>
            <Text style = {styles.time}>
              Starting Time:
            </Text>
            <Text style = {styles.duration}>
              Duration:
            </Text>
          </View>

          <TouchableOpacity onPress={() => this.pressHandler()}>
            <Image source={QRCODE} style={styles.qrcode} />
          </TouchableOpacity>

          {/* <View style={styles.navbar}>
            <TouchableOpacity>
              <Image source={RANK_NAV_ICON} style={styles.navItem}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={EARTH_NAV_ICON} style={styles.earthItem}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={FOOTBALLCOURT_NAV_ICON} style={styles.footballCourt}></Image>
            </TouchableOpacity>
          </View> */}
        </ImageBackground>
      </View>
    );
  }
}

export default withNavigation(QRCodeScannerScreen);