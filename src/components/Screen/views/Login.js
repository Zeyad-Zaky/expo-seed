import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import CustomTextInput from 'reusable/TextInput';
import styles from '../styles/LoginStyles';

const LOGIN_BACKGROUND = require('assets/loginPage/BG.png');
const KOTTENORA_LOGO = require('assets/loginPage/KOTTENORA.png');
const USERNAME_ICON_LOGO = require('assets/loginPage/usernameIcon.png');
const PASSWORD_ICON_LOGO = require('assets/loginPage/passwordIcon.png');

const LoginScreen = () => (
  <ImageBackground
    source={LOGIN_BACKGROUND}
    style={styles.background}
    imageStyle={styles.backgroundImage}
  >
    <View style={styles.subContainer}>
      <Image source={KOTTENORA_LOGO} style={styles.image} resizeMode="contain"></Image>
      <View style={styles.textInputContainer}>
        <CustomTextInput
          sourceIcon={USERNAME_ICON_LOGO}
          placeholder="Username"
          placeholderTextColor="white"
        />
        <CustomTextInput
          sourceIcon={PASSWORD_ICON_LOGO}
          placeholder="Password"
          placeholderTextColor="white"
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
);

export default LoginScreen;
