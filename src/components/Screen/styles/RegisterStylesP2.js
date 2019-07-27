import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

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
    phaseView: {
        width: responsiveWidth(85),
        height: responsiveHeight(20),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '15%',
        alignSelf: 'center'

    },
    phaseLine: {

        position: 'absolute',
        maxWidth: '40%',
        width: '100%',
        height: '100%',
        resizeMode: 'contain',

    },
    circleA: {
        position: 'absolute',
        maxWidth: '10%',
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        right: '65%',

    },
    circleB: {
        position: 'absolute',
        maxWidth: '10%',
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        left: '65%',

    },
    doneA: {
        position: 'absolute',
        maxWidth: '10%',
        width: '45%',
        height: '50%',
        resizeMode: 'contain',
        right: '68%',
    },
    doneB: {
        position: 'absolute',
        maxWidth: '10%',
        width: '45%',
        height: '50%',
        resizeMode: 'contain',
        left: '68%',
    },
    detailsView: {
        width: responsiveWidth(80),
        height: responsiveHeight(50),
        maxHeight: responsiveHeight(100),
        maxWidth: responsiveHeight(100),
        marginTop: '10%',

    },
    userDetailsView: {
        width: '100%',
        height: '85%',

    },
    selectText: {
        fontFamily: 'LTAromaBI',
        top: '10%',
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        textAlign: "center",
    },
    pngsView: {
        maxWidth: '100%',
        maxHeight: '15%',
        flex: 1,
        justifyContent: 'flex-start',
        marginBottom: '5%',

    },
    pngs: {
        height: '100%',
        width: '100%',
        right: '45%',
        resizeMode: 'contain',
    },
    shortLine: {
        position: 'absolute',
        height: '5%',
        width: '37%',
        left: '13%',
        resizeMode: 'stretch',
    },
    shortLine2: {
        position: 'absolute',
        width: '39%',
        height: '5%',
        left: '60%',
        resizeMode: 'stretch',
    },
    inputText: {
        position: 'absolute',
        width: '37%',
        height: '100%',
        color: 'white',
        fontFamily: 'LTAromaBI',
        fontSize: responsiveFontSize(2),
        textAlign: "left",
        textAlignVertical: 'center',
        left: '15%',
        bottom: '100%'
    },
    inputText2: {

        width: '37%',
        height: '100%',
        color: 'white',
        fontFamily: 'LTAromaBI',
        fontSize: responsiveFontSize(2),
        textAlign: "left",
        textAlignVertical: 'center',
        left: '62%',
        bottom: '100%'

    },
    longLine: {
        position: 'absolute',
        height: '5%',
        width: '84%',
        left: '15%',
        resizeMode: 'stretch',

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
    mailPngView: {
        maxWidth: '100%',
        maxHeight: '15%',
        flex: 1,
        justifyContent: 'flex-start',
        marginBottom: '5%',
        top: '3%',

    },
    mailPng: {

        height: '70%',
        width: '90%',
        right: '42%',
        resizeMode: 'contain',
    },
    nextButtonView: {
        alignSelf: 'center',
        top: "10%",
        height: '13%',
        width: '30%',
    },
    nextButton: {
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        maxWidth: '100%',
        backgroundColor: "#aaa"

    },
    nextText: {
        position: 'absolute',
        alignSelf: 'center',
        fontFamily: 'LTAromaBI',
        top: '10%',
        color: 'black',
        fontSize: responsiveFontSize(3),
        textAlign: "center",
    },
    picker: {
        width: '84%',
        height: '100%',
        maxHeight: '100%',
        maxWidth: '100%',
        color: 'white',
        fontFamily: 'LTAromaBI',
        fontSize: responsiveFontSize(2),
        textAlign: "left",
        textAlignVertical: 'center',
        


    },
    pickerTrans:
    {
        left: '15%',
        bottom: '100%'

    },
    dropdown: {
        position:'absolute',
        width: '4%',
        height: '100%',
        maxHeight: '100%',
        maxWidth: '100%',
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        bottom: '100%',
        right: '2%',
    },
    datePos1:{
        maxHeight: '100%',
        maxWidth: '84%',
        alignSelf: 'flex-start',
        width:'100%',
        height:'100%',
        left: '15%',
        bottom: '100%'
    },
    datePos2:{
        bottom: '2%',

       borderWidth:0,
    },

   
    dateText: {
        maxHeight: '100%',
        maxWidth: '100%',
        width: '100%',
        height: '100%',
        color: 'white',
        fontFamily: 'LTAromaBI',
        fontSize: responsiveFontSize(2),
        textAlign: "left",
        textAlignVertical: 'center',
    },
    datePlaceHolder: {
        maxHeight: '100%',
        maxWidth: '100%',
        width: '100%',
        height: '100%',
        fontFamily: 'LTAromaBI',
        fontSize: responsiveFontSize(2),
        textAlign: "left",
        textAlignVertical: 'center',

    }

});