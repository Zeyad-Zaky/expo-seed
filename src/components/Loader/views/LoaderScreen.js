import React from 'react';
import { View, Image, Text } from 'react-native';
import { View as AnimatedView } from 'react-native-animatable';

const logo = require('assets/icon.png');

const LoaderScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f1f1',
      }}
    >
      <AnimatedView
        animation="pulse"
        iterationCount="infinite"
        iterationDelay={500}
        duration={2000}
        useNativeDriver
        style={{ height: 250, width: '100%', justifyContent: 'center', alignItems: 'center' }}
      >
        <Image style={{ flex: 1 }} resizeMode="contain" source={logo} />
      </AnimatedView>
      <AnimatedView
        animation="slideInUp"
        style={{ position: 'absolute', bottom: 40 }}
        useNativeDriver
      >
        <Text>Loading</Text>
      </AnimatedView>
    </View>
  );
};

export default LoaderScreen;
