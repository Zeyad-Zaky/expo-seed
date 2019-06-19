import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const HeaderComponent = props => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default HeaderComponent;
