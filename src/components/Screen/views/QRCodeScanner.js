import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/QRCodeStyles';

const RANK_NAV_ICON = require('assets/QRCodeScannerPage/Rank_nav.png'); // USED
const EARTH_NAV_ICON = require('assets/QRCodeScannerPage/Earth_nav.png'); // USED
const FOOTBALLCOURT_NAV_ICON = require('assets/QRCodeScannerPage/FootballCourt_nav.png'); // USED

const BACKGROUND = require('assets/QRCodeScannerPage/BG.png'); // USED
const QRCODE = require('assets/QRCodeScannerPage/QR.png'); // USED
const QRCODE_FRAME = require('assets/QRCodeScannerPage/frame.png');

class QRCodeScannerScreen extends Component {
  state = {
    username: 'Zeyad Yasser',
    QRCode: QRCODE,
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={BACKGROUND}
          style={styles.background}
          imageStyle={styles.backgroundImage}
        >
          <View style={{ marginLeft: '-75%' }}>
            <Text style={styles.pitch}>Pitch:</Text>
            <Text style={styles.admin}>Admin:</Text>
            <Text style={styles.time}>Starting Time:</Text>
            <Text style={styles.duration}>Duration:</Text>
          </View>

          <View>
            <Image source={QRCODE} style={styles.qrcode} />
          </View>

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

export default QRCodeScannerScreen;
