import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Platform } from 'react-native';
import colors from 'styles/colors';
import * as Font from 'expo-font';
import LoaderScreen from './views/LoaderScreen';

const bold = require('assets/fonts/Linotype/Linotype-Bold.ttf');

class Loader extends Component {
  async componentDidMount() {
    const { navigation } = this.props;
    await Font.loadAsync({
      'font-awesome-solid': require('assets/fonts/font-awesome/font-awesome-solid.otf'),
      'font-awesome-light': require('assets/fonts/font-awesome/font-awesome-light.otf'),
      bold,
    });

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colors.offWhite, true);
      StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('dark-content');
    }

    navigation.navigate('main');

    if (Platform.OS === 'android') StatusBar.setBackgroundColor('white', true);
  }

  render() {
    return <LoaderScreen />;
  }
}

Loader.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
};

export default Loader;
