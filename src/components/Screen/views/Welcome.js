import React, { Component } from 'react';
import { AppRegistry, View, Text, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from '../styles/WelcomeStyles';
import { Button } from 'react-native'


//Page 1
const BACKGROUND = require('assets/welcomePage/bg.png');

const NEXTBUTTON = require('assets/welcomePage/button.png');
const PP = require('assets/welcomePage/pp.png');
const GALLERY = require('assets/welcomePage/gallery.png');





class Welcome extends Component {
    constructor() {
        super()
        this.state = {
            firstPage: true,
            // newUser
            username: 'Username',
        };
    }
    nextPage()
    {
      this.setState({
        firstPage: !this.state.firstPage
      })
   
    }
    render() {
        return (
          <View style={styles.container}>
          <ImageBackground source={BACKGROUND} style={styles.background} imageStyle={styles.backgroundImage}>
              <View style={styles.pageView}>
      
                  <View style={styles.detailsView}>
                      <View style={styles.userDetailsView}>


                      <View style={styles.pngsView}>
                              <View style={ styles.newAccountView}>
                                  <Text style={styles.textWelcome}>Welcome </Text>
                                  <Text style={styles.yellowTextWelcome}> {this.state.username}</Text>
                              </View>
                          </View>
      
      
                              <View style={styles.logoView}>
                            <Image source={PP} style={styles.logo}></Image>
                            <TouchableOpacity style  = {styles.galleryView} onPress={ ()=>this.nextPage()}>
                                  <Image source={GALLERY} style={styles.gallery}></Image>
                              </TouchableOpacity>
                          </View>

<View style= {styles.test}>
                          <View style={styles.pngsView}>
                              <View style={ styles.newAccountView}>
                                  <Text style={styles.text}>You're all set</Text>
                              </View>
                          </View>

      
                          <View style={styles.pngsView}>
                              <View style={ styles.newAccountView}>
                                  <Text style={styles.yellowText}>Take a minute to upload a profile picture</Text>
                              </View>
                          </View>
                          </View>
      
      
                          
                              <TouchableOpacity style={styles.nextButtonView} onPress={ ()=>this.nextPage()}>
                                  <Image source={NEXTBUTTON} style={styles.nextButton}></Image>
                                  <Text style={styles.nextText}>Done</Text>
                              </TouchableOpacity>


                      </View>
      
                  </View>
      
              </View>
          </ImageBackground>
      </View>
        );
    }
}

export default Welcome;
