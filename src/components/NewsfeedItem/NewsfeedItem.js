import React from "react";
import {StyleSheet, TouchableOpacity, Image, ImageBackground, Text, View} from "react-native";

const NewsfeedItem = props => (
  <TouchableOpacity>
    <ImageBackground source={require('../../assets/newsfeedPage/ContainerNewsfeed.png')} style={styles.newsfeedItem} imageStyle={styles.newsfeedItemImage}>
        {/* <Image source={require('../../assets/newsfeedPage/Pic.png')} style={styles.newsfeedPicture}/> */}
        <Text style={styles.newsfeedTitle}>{props.title}</Text>
        <Text style={styles.newsfeedNews}>{props.news}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  newsfeedItem: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 7,
    height: 100,
    maxWidth: '90%'
  },
  newsfeedItemImage: {
      resizeMode: 'stretch'
  },
  newsfeedPicture: {
    resizeMode: 'stretch'
  },
  newsfeedTitle: {
    marginTop: '6%',
    marginLeft: '30%',
    width: '70%',
    color: 'white'
  },
  newsfeedNews: {
    marginLeft: '30%',
    width: '70%',
    color: 'white'
  }
});

export default NewsfeedItem;
