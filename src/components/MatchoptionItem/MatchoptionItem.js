import React from "react";
import {StyleSheet, TouchableOpacity, Image, ImageBackground, Text, View} from "react-native";

const MatchoptionItem = props => (
  <TouchableOpacity>
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

export default MatchoptionItem;
