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
    alignItems: 'center',
    justifyContent: 'center',
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

  navbar: {
    marginLeft: '15%',
    maxHeight: '10%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  navItem: {
    marginRight: '20%',
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
  }
});
