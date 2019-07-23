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
        <View style={{ marginLeft: '-75%' }}>
          <Text style={styles.pitch}>Pitch:</Text>
          <Text style={styles.admin}>Admin:</Text>
          <Text style={styles.time}>Starting Time:</Text>
          <Text style={styles.duration}>Duration:</Text>
        </View>

        <View>
          <Image source={QRCODE} style={styles.qrcode} />
        </View>
      </View>
    );
  }
}

export default QRCodeScannerScreen;
