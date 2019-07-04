import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    resizeMode: 'stretch',
  },
  topBar: {
    maxHeight: '12%',
    marginBottom: '8%',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  menu: {
    marginLeft: '20%',
    width: '50%',
    height: '50%',
    resizeMode: 'stretch',
  },
  playercard: {
    width: '80%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  playercardImage: {
    resizeMode: 'stretch',
  },
  profilepicture: {
    marginBottom: '35%',
    height: '65%',
    width: '20%',
    resizeMode: 'stretch',
  },
  username: {
    marginLeft: '5%',
    marginBottom: '70%',
    width: '75%',
    height: '30%',
    color: 'yellow',
  },
  newsfeed: {
    marginBottom: '10%',
    maxHeight: '70%',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  navbar: {
    marginLeft: '15%',
    maxHeight: '10%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  navItem: {
    marginRight: '25%',
    resizeMode: 'stretch',
  },
});
