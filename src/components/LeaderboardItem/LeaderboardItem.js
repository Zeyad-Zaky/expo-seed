import React from "react";
import {StyleSheet, TouchableOpacity, Image, ImageBackground, Text, View} from "react-native";

const LeaderboardItem = props => ( 
  <TouchableOpacity disabled={true}>
    {parseInt(props.rank, 10) % 2 != 0 ?
    <ImageBackground source={require('../../assets/rankPage/Rectangle1.png')} style={styles.leaderboardItem} imageStyle={styles.leaderboardItemImage}>
        <Text style={styles.rank}>{parseInt(props.rank, 10)}</Text>
        <Image source={props.flag} style={styles.flag}></Image>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.points}>{props.points}</Text>
        <Text style={styles.pts}>pts</Text>
    </ImageBackground> 
    :
    <ImageBackground source={require('../../assets/rankPage/Rectangle2.png')} style={styles.leaderboardItem} imageStyle={styles.leaderboardItemImage}>
        <Text style={styles.rank}>{parseInt(props.rank, 10)}</Text>
        <Image source={props.flag} style={styles.flag}></Image>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.points}>{props.points}</Text>
        <Text style={styles.pts}>pts</Text>
    </ImageBackground>
    }
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  leaderboardItem: {
    marginLeft: '5%',
    marginRight: '5%',
    height: 50,
    maxWidth: '90%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  leaderboardItemImage: {
      resizeMode: 'stretch'
  },
  rank: {
      color: 'white',
      fontWeight: 'bold',
      fontStyle: 'italic',
      marginLeft: '5%',
      maxWidth: '5%',
      marginTop: '2%'
  },
  flag: {
      marginLeft: '5%',
      maxWidth: '10%',
      maxHeight: '100%',
      resizeMode: 'stretch'
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: '5%',
    width: '40%',
    maxWidth: '40%',
    marginTop: '2%'
  },
  points: {
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: '5%',
    maxWidth: '10%',
    marginTop: '2%'
  },
  pts: {
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: '5%',
    marginTop: '2%'
  }
});

export default LeaderboardItem;
