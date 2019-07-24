import React from 'react';
import { DrawerItems } from 'react-navigation';
import { ImageBackground } from 'react-native';

const BACKGROUND_HEADER = require('assets/menu_background.png');

const DrawerContainer = props => (
  <ImageBackground style={{ flex: 1, width: null, height: null }} source={BACKGROUND_HEADER}>
    <DrawerItems {...props} />
  </ImageBackground>
);

export default DrawerContainer;
