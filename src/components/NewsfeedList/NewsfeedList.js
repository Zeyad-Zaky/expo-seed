import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import NewsfeedItem from '../NewsfeedItem/NewsfeedItem';

const NewsfeedList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.newsfeed}
      renderItem={(info) => (
        <NewsfeedItem title={info.item.title} news={info.item.news}/>
      )}
    /> 
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    height: '100%'
  }
});

export default NewsfeedList;
