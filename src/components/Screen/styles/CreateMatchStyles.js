import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  menu: {
    marginLeft: '20%',
    width: '50%',
    height: '50%',
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
  backgroundImage: {
   resizeMode: 'stretch',
   
  },
  playercard: {
    width: '85%',
    height: '100%',
    right: '40%'
    
  },
  pitchContainer: {
    top: '15%',
    left: '10%',
    flex: 1,
    alignItems: 'flex-start',
    width: '90%',
    height: '50%',
  },
  pitchContainerBG: {
    resizeMode: 'stretch',
  },
  teamView: {
    width: '100%',
    height: '100%',
    position: 'relative'

  },
  selectViewPitch: {
    left: '1%',
    flexDirection: 'row',

  },
  selectViewDay: {
    left: '2%',
    bottom: '1%',
    flexDirection: 'row',

  },
  select: {
    width: 110/1.2,
    height: 62/1.2,
    resizeMode: 'stretch',
    marginEnd: '10%'
  },
  selectText: {
    top: '5%',
    color: 'white',
    fontSize: 30,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold",
    marginEnd: '15%'
  },
  selectTextN: {
    top: '5%',
    color: 'white',
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold",
    marginEnd: '1%'
  },
  selectTextN1: {
    top: '5%',
    color: 'white',
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold",
    marginStart: '5%',
    marginEnd: '10%'
  },
  teamInfo: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: '0.5%',
    marginStart: '2%',
  },
  teamImage: {
    width: 40,
    height: 60,
  },
  teamImageStyle: {
    width: '100%',
    height: '100%',
  },
  spectator: {
    resizeMode: 'contain',
    width: '100%',
    height: '1%',
  },
  spectatorImage: {
    width: '85%',
    height: '100%'
  },
  dayContainer: {
    top: '15%',
    left: '5%',
    flex: 1,
    alignItems: 'flex-start',
    width: '95%',
    height: '40%',
  
  },
  dayContainerBG: {
    resizeMode: 'stretch',
  },
  chooseDays: {
    top: '20%',
    left: '2%',
    width: '95%',
    height: '45%'

  },
  navbar: {
    maxHeight: '10%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  navItem: {
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    marginRight: '20%',
    resizeMode: 'contain',
    
  }
});