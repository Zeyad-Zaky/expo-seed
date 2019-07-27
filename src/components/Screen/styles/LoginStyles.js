import {
  StyleSheet
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  background: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    alignItems: 'center',
    justifyContent: 'flex-start',


  },
  backgroundImage: {
    resizeMode: 'stretch',
  },
  pageView: {
    top: responsiveHeight(5),
    justifyContent: 'center',
    alignItems: 'center'

  },
  logoView: {
    width: responsiveWidth(85),
    maxHeight: responsiveHeight(30),
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {

    maxWidth: '80%',
    maxHeight: '100%',
    resizeMode: 'contain',
  },
  detailsView: {
    width: responsiveWidth(70),
    height: responsiveHeight(60),
    maxHeight: responsiveHeight(100),
    maxWidth: responsiveHeight(100),
    marginTop: '10%',

  },
  userDetailsView: {
    width: '100%',
    height: '85%',

  },
  pngsView: {
    maxWidth: '100%',
    maxHeight: '15%',
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: '5%',

  },
  pngs: {

    height: '75%',
    width: '100%',
    right: '45%',
    resizeMode: 'contain',
  },
  inputTextLong: {
    width: '82%',
    height: '100%',
    color: 'white',
    fontFamily: 'LTAromaBI',
    fontSize: responsiveFontSize(2),
    textAlign: "left",
    textAlignVertical: 'center',
    left: '15%',
    bottom: '100%'
  },
  longLine: {
    position: 'absolute',
    height: '5%',
    width: '84%',
    left: '15%',
    resizeMode: 'stretch',
  },
  forgetPasswordView: {
    width: '50%',
    height: '70%',

    alignSelf: 'flex-end',
  },
  passwordText: {
    alignSelf: 'center',
    bottom: '10%',
    color: 'white',
    fontFamily: 'LTAromaBI',
    fontSize: responsiveFontSize(2),
    textAlign: "center",
    textAlignVertical: 'center',
  },
  nextButtonView: {
    bottom: '50%',

    position: 'absolute',
    alignSelf: 'center',
    width: '45%',
    height: '100%',


  },
  nextButton: {

    alignSelf: 'center',
    width: '100%',
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',


  },
  nextText: {
    alignSelf: 'center',
    position: 'absolute',
    fontFamily: 'LTAromaBI',
    color: 'black',
    fontSize: responsiveFontSize(3.5),
    textAlign: "center",

  },
  text: {

    color: 'white',
    fontFamily: 'LTAromaBI',
    fontSize: responsiveFontSize(2),
    textAlign: "left",
    textAlignVertical: 'center',
  },
  newAccountView: {
    bottom: '30%',
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  yellowText: {

    color: '#FDCD07',
    fontFamily: 'LTAromaBI',
    fontSize: responsiveFontSize(2),
    textAlign: "left",
    textAlignVertical: 'center',
  },
});