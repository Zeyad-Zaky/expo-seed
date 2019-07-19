import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import StatusBar from './StatusBar';
import styles from './styles';

const MENU_LOGO = require('assets/QRCodeScannerPage/MENU.png');
// USED

const onMenuPress = () => {
  console.log('hi');
};

const HeaderComponent = props => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuLogoContainer} onPress={onMenuPress}>
        <Image source={MENU_LOGO} resizeMode="contain" style={styles.menuLogo} />
      </TouchableOpacity>
      <StatusBar title={title} />
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

export default HeaderComponent;
