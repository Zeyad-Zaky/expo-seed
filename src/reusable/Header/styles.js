import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
  },
  playercard: { width: '80%' },
  playercardImage: { width: '100%' },
  profilepicture: {},
  menuLogoContainer: {
    flex: 1,
    alignItems: 'center',
    height: '60%',
    justifyContent: 'center',
  },
  menuLogo: { width: 30, height: 30 },
});
