import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


export default StyleSheet.create({
  container: {
    borderWidth:3,

    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    resizeMode: 'contain',
  },
  playercard: {
    width: '85%',
    height: '100%',
    right: '40%'
    
  },
  PageView:{
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    bottom:'5%',
  },
  sep: {
    maxHeight: '7%',
    maxWidth: '85%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sepImage:{
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    resizeMode: 'stretch',  
  },
  selectText: {
    fontFamily: 'LTAromaBI',
    bottom: '10%',
    color: 'white',
    fontSize: responsiveFontSize(2.5),
    textAlign: "center",
  },
  glowText: {
    fontFamily: 'LTAromaBI',
    bottom: '10%',
    color: 'white',
    fontSize: responsiveFontSize(2.5),
    textShadowColor: 'rgba(255, 255, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    textAlign: "center",

  },
  selectTextToday: {
    bottom : '3%',
    maxWidth: '100%',
    resizeMode: 'contain',
  },
  MatchView: {
    marginTop: '5%',
    maxHeight: '100%',
    maxWidth: '90%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  touchableMatchBackground:{
    maxWidth: '100%',
    maxHeight:'25%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  MatchBackground: {
    
    maxWidth: '100%',
    maxHeight: '100%',
    resizeMode: 'stretch',

  },
  MatchNumberTXT: {
    
    width:'42%',
    height:'24%',
    position: 'absolute',
    color: 'black',
    fontSize: responsiveFontSize(1.7),
    textAlign: "center",
    textAlignVertical: 'center',
    fontWeight: "bold",
    left : '2%',
    top: '5%'
  },
  MatchLocTXT: {
   position: 'absolute',
    color: 'white',
    fontFamily: 'LTAromaBI',
    fontSize: responsiveFontSize(2),
    textAlign: "left",
    textAlignVertical: 'center',

    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 15,
    left : '5%',
    top: '45%',

  },
  MatchDateTXT: {
    fontFamily: 'LTAromaBI',
    position: 'absolute',
    color: 'white',
    fontSize: responsiveFontSize(1.6),
    textAlign: "left",
    textAlignVertical: 'center',
    left : '5%',
    top: '65%'

  },
  MatchEndTXT: {
    fontFamily: 'LTAromaBI',
    position: 'absolute',
    color: 'white',
    fontSize: responsiveFontSize(1.6),
    textAlign: "left",
    textAlignVertical: 'center',
    left : '5%',
    top: '77%'

  },
  MatchStartTXT: {
    fontFamily: 'LTAromaBI',
    position: 'absolute',
    color: 'white',
    fontSize: responsiveFontSize(1.6),
    textAlign: "left",
    textAlignVertical: 'center',
    left : '50%',
    top: '65%'
  },
  MatchAdminTXT: {
    fontFamily: 'LTAromaBI',
    position: 'absolute',
    color: 'white',
    fontSize: responsiveFontSize(1.6),
    textAlign: "left",
    textAlignVertical: 'center',
    left : '50%',
    top: '77%'
  },
  ResponseText: {
    fontFamily: 'LTAromaBI',
    position: 'absolute',
    color: 'orange',
    fontSize: responsiveFontSize(1.6),
    textAlign: "left",
    textAlignVertical: 'center',
    left : '5%',
    top: '65%'
  }
  
});