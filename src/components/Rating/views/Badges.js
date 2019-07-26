import React, { useState } from 'react';
import { View } from 'react-native';
import { Text as AnimatedText } from 'react-native-animatable';
import Badge from './Badge';

const WRIST = require('assets/images/wristwatch.png');
const SNIPER = require('assets/images/sniper.png');

const BADGES = [{ title: 'Sniper', icon: WRIST }, { title: 'Wristwatch', icon: SNIPER }];

const Badges = () => {
  const [state, setState] = useState({ badges: BADGES });

  const onBadgePress = index => {
    const { badges } = state;
    badges.splice(index, 1);

    setState({ badges });
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      {state.badges.map((badge, index) => (
        <Badge key={badge.title} {...badge} onBadgePress={() => onBadgePress(index)} />
      ))}

      {state.badges.length === 0 && (
        <AnimatedText
          animation="bounceIn"
          useNativeDriver
          style={{ fontWeight: '600', width: '100%', textAlign: 'center' }}
        >
          There are no more badges to select
        </AnimatedText>
      )}
    </View>
  );
};

export default Badges;
