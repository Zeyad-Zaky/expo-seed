import React, { Component } from 'react';
import { AppRegistry, View, Text, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../styles/LoginStyles';
import { Button } from 'react-native'


//Page 1
const BACKGROUND = require('assets/loginPage/BG.png');
const KOTTENORA = require('assets/loginPage/logo.png');
const USERNAME = require('assets/loginPage/username.png');
const PASSWORD = require('assets/register/password.png');
const SHORTLINE = require('assets/register/shortLine.png');

const NEXTBUTTON = require('assets/loginPage/button.png');



class LoginScreen extends Component {
    constructor() {
        super()
        this.state = {
            firstPage: true,
            // newUser
            username: '',
            password: '',
        };
    }
    nextPage()
    {
      this.setState({
        firstPage: !this.state.firstPage
      })
   
    }
    presshandeler = () => {
      const {navigation} = this.props;
      navigation.navigate('Newsfeed');
    };  

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={BACKGROUND} style={styles.background} imageStyle={styles.backgroundImage}>
          <View style={styles.pageView}>
              <View style={styles.logoView}>
                  <Image source={KOTTENORA} style={styles.logo}></Image>
              </View>
  
              <View style={styles.detailsView}>
                  <View style={styles.userDetailsView}>
  
                      <View style={styles.pngsView}>
                          <Image source={USERNAME} style={styles.pngs}></Image>
                          <View>
                              <Image source={SHORTLINE} style={styles.longLine}></Image>
  
                              <TextInput style={styles.inputTextLong} placeholder='Username' onChangeText={(username)=> this.setState({ username })} value={this.state.username} />
                          </View>
                      </View>
  
                      <View style={styles.pngsView}>
                          <Image source={PASSWORD} style={styles.pngs}></Image>
                          <View>
                              <Image source={SHORTLINE} style={styles.longLine}></Image>
  
                              <TextInput style={styles.inputTextLong} placeholder='Password' secureTextEntry={true} onChangeText={(password)=> this.setState({ password })} value={this.state.password} />
                          </View>
                      </View>
  
                      <View style={styles.pngsView}>
                          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.presshandeler()} style={ styles.forgetPasswordView}>
                              <Text style={styles.passwordText}>Forget Password ?</Text>
                          </TouchableOpacity>
                      </View>
  
                      <View style={styles.pngsView}>
                          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.presshandeler()} style={styles.nextButtonView}>
                              <Image source={NEXTBUTTON} style={styles.nextButton}></Image>
                              <Text style={styles.nextText}>Sign in</Text>
                          </TouchableOpacity>
                      </View>
  
                      <View style={styles.pngsView}>
                          <View style={ styles.newAccountView}>
                              <Text style={styles.text}>Don't have an account ? </Text>
                              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.presshandeler()} style={ styles.test}>
                                  <Text style={styles.yellowText}> Sign up now</Text>
                              </TouchableOpacity>
                          </View>
                      </View>
  
                  </View>
  
              </View>
  
          </View>
      </ImageBackground>
  </View>
     
    );
  }
};

export default withNavigation(LoginScreen);
