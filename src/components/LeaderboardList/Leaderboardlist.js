import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import LeaderboardItem from '../LeaderboardItem/LeaderboardItem';

const NewsfeedList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.leaderboard}
      renderItem={info => (
        <LeaderboardItem
          rank={info.item.key}
          flag={info.item.flag}
          name={info.item.name}
          points={info.item.points}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    height: '100%',
  },
});

export default NewsfeedList;
