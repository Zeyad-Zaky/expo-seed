import React from "react";
import { StyleSheet, FlatList} from "react-native";

import MatchoptionItem from '../MatchoptionItem/MatchoptionItem';

const MatchoptionList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.matchoption}
      renderItem={(info) => (
        <MatchoptionItem key={info.item.key} image={info.item.image} title={info.item.title} content={info.item.content}/>
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

export default MatchoptionList;
