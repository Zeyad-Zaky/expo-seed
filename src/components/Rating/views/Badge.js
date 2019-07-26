import React from 'react';
import { Text, Image, View, TouchableWithoutFeedback } from 'react-native';

const Badge = ({ title, icon, onBadgePress }) => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: 70,
    }}
  >
    <TouchableWithoutFeedback onPress={onBadgePress}>
      <View
        style={{
          borderRadius: 100,
          borderColor: '#333333',
          borderWidth: 3,
          justifyContent: 'center',
          alignItems: 'center',
          height: 70,
          padding: 15,
          aspectRatio: 1,
        }}
      >
        <Image
          resizeMode="cover"
          style={{ height: '100%', width: '100%', tintColor: '#333333' }}
          source={icon}
        />
      </View>
    </TouchableWithoutFeedback>
    <Text
      style={{
        fontWeight: '700',
        marginTop: 10,
        textAlign: 'center',
        width: '100%',
      }}
    >
      {title}
    </Text>
  </View>
);

export default Badge;
