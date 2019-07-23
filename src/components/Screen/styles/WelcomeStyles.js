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
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    background: {
      width: responsiveWidth(100),
      height: responsiveHeight(100),
      alignItems: 'center',
      justifyContent: 'flex-start',
  
  
    },
    pageView: {
        top: responsiveHeight(5),
        justifyContent: 'center',
        alignItems: 'center'
    
      },
      detailsView: {
        width: responsiveWidth(90),
        height: responsiveHeight(60),
        maxHeight: responsiveHeight(100),
        maxWidth: responsiveHeight(100),
        marginTop: '20%',
    
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
      logoView: {
 position:'absolute',

 alignSelf:'center',
top:'10%',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        height: '70%',
      },
      logo: {
        maxWidth: '100%',
        maxHeight: '100%',
        resizeMode: 'contain',
      },
      galleryView: {
        width: '20%',
        height: '20%',
        bottom:'30%',
        left:'30%',

      },
      gallery: {    
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      },
      nextButtonView: {
        top: '130%',
    
        position: 'absolute',
        alignSelf: 'center',
        width: '45%',
        height: '15%',
    
    
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
      textWelcome: {

        color: 'white',
        fontFamily: 'LTAromaBI',
        fontSize: responsiveFontSize(4),
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
      yellowTextWelcome: {
    
        color: '#FDCD07',
        fontFamily: 'LTAromaBI',
        fontSize: responsiveFontSize(4),
        textAlign: "left",
        textAlignVertical: 'center',
      },
      test: {
        position: 'absolute',
        alignSelf: 'flex-end',
        width: '100%',
        height: '30%',
        top:  '90%',
      }
});