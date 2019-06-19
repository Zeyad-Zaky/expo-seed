import React, { Component }from 'react';
import {
    View, 
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

class LoginScreen extends Component {
        render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/loginPage/BG.png')} style={styles.background} imageStyle={styles.backgroundImage}>
                    <Text style={styles.title}>Sign In</Text>
                    <Image source={require('../../../assets/loginPage/KOTTENORA.png')} style={styles.image}></Image>
                    <View style={styles.inputSection}>
                        <Image source={require('../../../assets/loginPage/usernameIcon.png')} style={styles.usernameIcon}></Image>
                        <TextInput placeholder="username" placeholderTextColor='white' style={styles.input}></TextInput>
                    </View>
                    <View style={styles.inputSection}>
                        <Image source={require('../../../assets/loginPage/passwordIcon.png')} style={styles.passwordIcon}></Image>
                        <TextInput placeholder="password" placeholderTextColor='white' style={styles.input}></TextInput>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/loginPage/button.png')} style={styles.button}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    background: {
        width: '100%', 
        height: '100%'
    },
    backgroundImage: {
        resizeMode: 'stretch'
    },
    title: {
        marginTop: '5%',
        marginLeft: '30%',
        marginRight: '30%',
        width: '40%',
        height: '5%',
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff'
    },
    image: {
        marginTop: '20%',
        marginLeft: '20%',
        marginRight: '20%',
        width: '60%',
        height: '10%',
        resizeMode: 'contain'
    },
    inputSection: {
        marginLeft: '20%',
        marginRight: '20%',
        width: '60%',
        height: '2.5%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    input: {
        width: '80%',
        height: '100%',
        color: 'white'
    },
    usernameIcon: {
        marginRight: '5%',
        width: '15%',
        height: '100%',
        resizeMode: 'contain',
    },
    passwordIcon: {
        marginRight: '5%',
        width: '15%',
        height: '100%',
        resizeMode: 'contain',
    },
    button: {
        marginTop: '5%',
        marginBottom: '40%',
        marginLeft: '25%',
        marginRight: '25%',
        width: '50%',
        height: '20%',
        resizeMode: 'contain'
    }
});

export default LoginScreen;