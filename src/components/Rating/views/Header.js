import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';

const COVER = require('assets/images/cover.jpg');
const SHEHAB = require('assets/images/shehab.jpeg');

const HEADER_HEIGHT = Dimensions.get('window').height;

const Header = () => (
  <View
    style={{
      height: HEADER_HEIGHT * 0.2,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: HEADER_HEIGHT * 0.1,
    }}
  >
    <View
      style={{
        borderRadius: 15,
        position: 'absolute',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
      }}
    >
      <Image style={{ width: '100%', height: '100%' }} resizeMode="cover" source={COVER} />
    </View>
    <View
      style={{
        elevation: 10,
        height: '50%',
        top: '50%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          height: '100%',
          aspectRatio: 1,
          borderRadius: 100,
          borderColor: 'white',
          borderWidth: 3,
          overflow: 'hidden',
          marginBottom: 10,
        }}
      >
        <Image style={{ height: '100%', width: '100%' }} source={SHEHAB} />
      </View>
      <Text
        style={{
          fontFamily: 'bold',
          color: '#eda323',
          fontSize: 20,
        }}
      >
        Shehab El Shennawy
      </Text>
    </View>
  </View>
);

export default Header;
