import React, { useState } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

const Endorsement = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    let newValue = value + 1;
    if (newValue > 3) newValue = 0;
    setValue(newValue);
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
      }}
    >
      <TouchableWithoutFeedback onPress={increment}>
        <View
          style={{
            borderRadius: 100,
            borderColor: 'white',
            borderWidth: 3,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            aspectRatio: 1,
            backgroundColor: value ? '#eda323' : 'transparent',
          }}
        >
          <Text style={{ fontWeight: '500', color: value ? 'white' : '#333333' }}>{value}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text
        style={{
          fontWeight: '700',
          color: value ? 'white' : '#333333',
          marginTop: 10,
          textAlign: 'center',
          width: '100%',
        }}
      >
        PCE
      </Text>
    </View>
  );
};

export default Endorsement;
