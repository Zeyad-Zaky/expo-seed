import React from 'react';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import FontAwesome from 'reusable/FontAwesome';

const Rates = ({ rate, setRating }) => {
  const ratings = [];

  for (let i = 1; i <= 10; i += 1) {
    ratings.push(
      <TouchableWithoutFeedback onPress={() => setRating(i)}>
        <FontAwesome icon="star" color={i <= rate ? '#f4cd2a' : '#333333'} size={25} />
      </TouchableWithoutFeedback>
    );
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      {ratings}
    </View>
  );
};

export default Rates;
