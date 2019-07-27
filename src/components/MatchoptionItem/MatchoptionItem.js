import React from "react";
import {StyleSheet, TouchableOpacity, Image, ImageBackground, Text, View} from "react-native";
import { withNavigation } from 'react-navigation';

page = props => {
  switch (props.title) {
    case 'Start Match':
      props.navigation.navigate('qrCodeScanner');
      break;
    case 'Create Match':
      props.navigation.navigate('createMatch');
      break;
    case 'Join Match':
      props.navigation.navigate('joinMatches');
      break;
    default:
      break;
  }
};

const MatchoptionItem = props => (
  <TouchableOpacity onPress={() => this.page(props)}>
    <ImageBackground source={props.image} style={styles.matchoptionItem} imageStyle={styles.matchoptionImage}>
    <Text style={styles.title}>{props.title}</Text>
    <Text style={styles.content}>{props.content}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  matchoptionItem: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 7,
    height: 90,
    maxWidth: '90%'
  },
  matchoptionItemImage: {
      resizeMode: 'contain'
  },
  title: {
      color: 'white',
      fontStyle: 'italic',
      fontWeight: 'bold',
      marginLeft: '5%'
  },
  content: {
      marginTop: '5%',
      marginLeft: '5%',
      color: 'white',
      maxWidth: '70%'
  }
});

export default withNavigation(MatchoptionItem);
