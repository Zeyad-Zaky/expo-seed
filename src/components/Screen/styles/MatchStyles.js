import { StyleSheet, Dimensions } from 'react-native';

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
    // resizeMode: 'stretch',
    flex: 1,
    alignItems: 'center',
  },
  topBar: {
    maxHeight: '10%',
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
  optionsBar: {
    marginTop: '15%',
    marginLeft: '20%',
    maxHeight: '15%',
    width: '60%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  option: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: Dimensions.get('window').width / 20,
    marginRight: '10%',
    height: '100%',
  },
  seperator: {
    position: 'absolute',
    marginTop: '20%',
    marginLeft: '35%',
    maxWidth: '30%',
    maxHeight: '20%',
    resizeMode: 'stretch',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  matchOptions: {
    // marginTop: '9%',
    maxHeight: '65%',
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
  earthItem: {
    marginRight: '20%',
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  footballCourt: {
    marginRight: '20%',
    width: 50,
    height: 37,
    resizeMode: 'stretch',
  },
});
