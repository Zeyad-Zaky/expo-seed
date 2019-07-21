import React, { Component } from 'react';
import { AppRegistry, View, Text, ImageBackground, TouchableOpacity, Image, TextInput, Picker } from 'react-native';
import styles from '../styles/RegisterStyles';
import stylesP2 from '../styles/RegisterStylesP2';
import { Button } from 'react-native'
import { Font, AppLoading } from "expo";
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker'


//Page 1
const BACKGROUND = require('assets/register/bg.png');
const KOTTENORA = require('assets/register/logo.png');
const NAME = require('assets/register/name.png');
const USERNAME = require('assets/register/username.png');
const MAIL = require('assets/register/mail.png');
const PASSWORD = require('assets/register/password.png');
const MOBILE = require('assets/register/mobile.png');
const SHORTLINE = require('assets/register/shortLine.png');
const LONGLINE = require('assets/register/longLine.png');

//Page 2
const HASHTAG = require('assets/register/hashtag.png');
const ROLE = require('assets/register/role.png');
const NATIONALITY = require('assets/register/nationality.png');
const TERRITORY = require('assets/register/territory.png');
const BIRTHDAY = require('assets/register/birthday.png');


const DROPDOWN = require('assets/register/dropdown.png');
const PHASELINE = require('assets/register/line.png');
const GLOWCIRCLE = require('assets/register/glow.png');
const CIRCLE = require('assets/register/circle.png');
const DONE = require('assets/register/done.png');
const NEXTBUTTON = require('assets/register/button.png');



class Register extends Component {
    constructor() {
        super()
        this.state = {
            firstPage: true,
            // newUser
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            passwordA: '',
            mobileNumber: '',
            knownAs: '',
            role: [
                {
                    label: 'Role A',
                    value: 'Role A',
                },
                {
                    label: 'Role B',
                    value: 'Role B',
                },
            ],
            selectedRole: '',
            nationality: [
                {
                    label: 'Country A',
                    value: 'Country A',
                },
                {
                    label: 'Country B',
                    value: 'Country B',
                },
            ],
            selectedNationality: '',
            territory: [
                {
                    label: 'Nasr City',
                    value: 'Nasr City',
                },
                {
                    label: 'New Cairo',
                    value: 'New Cairo',
                },
            ],
            selectedTerritory: '',
            selectedDate:'',

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
                <ImageBackground
                    source={BACKGROUND}
                    style={styles.background}
                    imageStyle={styles.backgroundImage}
                >
                    <View style={styles.pageView}>
                        <View style={styles.logoView}>
                            <Image source={KOTTENORA} style={styles.logo}></Image>
                        </View>

                        <View style={styles.detailsView}>
                            {this.state.firstPage ?
                                <View style={styles.userDetailsView}>

                                    <View style={styles.phaseView}>
                                        <Image source={GLOWCIRCLE} style={styles.circleA} ></Image>
                                        <Image source={CIRCLE} style={styles.circleB} ></Image>
                                        <Image source={PHASELINE} style={styles.phaseLine}></Image>
                                        <Image source={DONE} style={styles.done} ></Image>

                                    </View>

                                    <View style={styles.pngsView}>
                                        <Image source={NAME} style={styles.pngs}></Image>
                                        <View>
                                            <Image source={SHORTLINE} style={styles.shortLine}></Image>
                                            <TextInput
                                                style={styles.inputText}
                                                placeholder='First Name'
                                                onChangeText={(firstName) => this.setState({ firstName })}
                                                value={this.state.firstName}
                                            />

                                            <Image source={SHORTLINE} style={styles.shortLine2}></Image>
                                            <TextInput
                                                style={styles.inputText2}
                                                placeholder='Last Name'
                                                onChangeText={(lastName) => this.setState({ lastName })}
                                                value={this.state.lastName}
                                            />
                                        </View>
                                    </View>


                                    <View style={styles.pngsView}>
                                        <Image source={USERNAME} style={styles.pngs}></Image>
                                        <View>
                                            <Image source={SHORTLINE} style={styles.longLine}></Image>

                                            <TextInput
                                                style={styles.inputTextLong}
                                                placeholder='Username'
                                                onChangeText={(username) => this.setState({ username })}
                                                value={this.state.username}
                                            />
                                        </View>
                                    </View>


                                    <View style={styles.mailPngView}>
                                        <Image source={MAIL} style={styles.mailPng}></Image>
                                        <View>
                                            <Image source={SHORTLINE} style={styles.longLine}></Image>

                                            <TextInput
                                                style={styles.inputTextLong}
                                                placeholder='Email'
                                                onChangeText={(email) => this.setState({ email })}
                                                value={this.state.email}
                                            />
                                        </View>
                                    </View>

                                    <View style={styles.pngsView}>
                                        <Image source={PASSWORD} style={styles.pngs}></Image>
                                        <View>
                                            <Image source={SHORTLINE} style={styles.shortLine}></Image>
                                            <TextInput
                                                style={styles.inputText}
                                                placeholder='Password'
                                                secureTextEntry={true}
                                                onChangeText={(password) => this.setState({ password })}
                                                value={this.state.password}
                                            />

                                            <Image source={SHORTLINE} style={styles.shortLine2}></Image>
                                            <TextInput
                                                style={styles.inputText2}
                                                placeholder='Again'
                                                secureTextEntry={true}
                                                onChangeText={(passwordA) => this.setState({ passwordA })}
                                                value={this.state.passwordA}
                                            />
                                        </View>
                                    </View>



                                    <View style={styles.pngsView}>
                                        <Image source={MOBILE} style={styles.pngs}></Image>
                                        <View>
                                            <Image source={SHORTLINE} style={styles.longLine}></Image>

                                            <TextInput
                                                style={styles.inputTextLong}
                                                placeholder='Mobile Number'
                                                keyboardType={"numeric"}
                                                onChangeText={(mobileNumber) => this.setState({ mobileNumber })}
                                                value={this.state.mobileNumber}

                                            />
                                        </View>
                                    </View>
                                </View>
                                /* +++++++++++++++++++++++++++++++++++++                     PAGE 2                     +++++++++++++++++++++++++++++++++++++ */
                                :
                                <View style={stylesP2.userDetailsView}>

                                    <View style={stylesP2.phaseView}>
                                        <Image source={GLOWCIRCLE} style={stylesP2.circleA} ></Image>
                                        <Image source={GLOWCIRCLE} style={stylesP2.circleB} ></Image>
                                        <Image source={PHASELINE} style={stylesP2.phaseLine}></Image>
                                        <Image source={DONE} style={stylesP2.doneA} ></Image>
                                        <Image source={DONE} style={stylesP2.doneB} ></Image>


                                    </View>

                                    <View style={stylesP2.pngsView}>
                                        <Image source={HASHTAG} style={stylesP2.pngs}></Image>
                                        <View>
                                            <Image source={SHORTLINE} style={stylesP2.longLine}></Image>

                                            <TextInput
                                                style={stylesP2.inputTextLong}
                                                placeholder='Known As'
                                                onChangeText={(knownAs) => this.setState({ knownAs })}
                                                value={this.state.knownAs}
                                            />
                                        </View>
                                    </View>



                                    <View style={stylesP2.pngsView}>
                                        <Image source={ROLE} style={stylesP2.pngs}></Image>
                                        <View>
                                            <Image source={SHORTLINE} style={stylesP2.longLine}></Image>

                                            <View style={stylesP2.pickerTrans}>
                                                <RNPickerSelect
                                                    style={{
                                                        inputAndroid:
                                                            stylesP2.picker,
                                                    }}
                                                    placeholder={{label: "Role",
                                                        value: null,
                                                        color: 'red',}}
                                                    items={this.state.role}
                                                    useNativeAndroidPickerStyle={false}
                                                    onValueChange={value => {
                                                        this.setState({
                                                            selectedRole: value,
                                                        });
                                                    }}
                                                    value={this.state.selectedRole}
                                                />
                                            </View>
                                            <Image source={DROPDOWN} style={stylesP2.dropdown}></Image>

                                        </View>
                                    </View>

                                    <View style={stylesP2.pngsView}>
                                        <Image source={NATIONALITY} style={stylesP2.pngs}></Image>
                                        <View>
                                            <Image source={SHORTLINE} style={stylesP2.longLine}></Image>

                                            <View style={stylesP2.pickerTrans}>
                                                <RNPickerSelect
                                                    style={{
                                                        inputAndroid:
                                                            stylesP2.picker,
                                                    }}
                                                    placeholder={{label: "Nationality",
                                                        value: null,
                                                        color: 'red',}}
                                                    items={this.state.nationality}
                                                    useNativeAndroidPickerStyle={false}
                                                    onValueChange={value => {
                                                        this.setState({
                                                            selectedNationality: value,
                                                        });
                                                    }}
                                                    value={this.state.selectedNationality}
                                                />
                                            </View>
                                            <Image source={DROPDOWN} style={stylesP2.dropdown}></Image>

                                        </View>
                                    </View>



                                    <View style={stylesP2.pngsView}>
                                        <Image source={TERRITORY} style={stylesP2.pngs}></Image>
                                        <View>
                                            <Image source={SHORTLINE} style={stylesP2.longLine}></Image>

                                            <View style={stylesP2.pickerTrans}>
                                                <RNPickerSelect
                                                    style={{
                                                        inputAndroid:
                                                            stylesP2.picker,
                                                    }}
                                                    placeholder={{label: "Territory",
                                                        value: null,
                                                        color: 'red',}}
                                                    items={this.state.territory}
                                                    useNativeAndroidPickerStyle={false}
                                                    onValueChange={value => {
                                                        this.setState({
                                                            selectedTerritory: value,
                                                        });
                                                    }}
                                                    value={this.state.selectedTerritory}
                                                />
                                            </View>
                                            <Image source={DROPDOWN} style={stylesP2.dropdown}></Image>

                                        </View>
                                    </View>

                                   
                                    <View style={stylesP2.pngsView}>
                                        <Image source={BIRTHDAY} style={stylesP2.pngs}></Image>
                                        <View>
                                            <Image source={SHORTLINE} style={stylesP2.longLine}></Image>

                                            <DatePicker
                                        style={stylesP2.datePos1}
                                        date={this.state.selectedDate}
                                        mode="date"
                                        placeholder="Birthday"
                                        format="DD-MM-YYYY"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        showIcon={false}
                                        customStyles={{
                                            dateInput: stylesP2.datePos2,
                                            dateText: 
                                                stylesP2.dateText,
                                            placeholderText:
                                                stylesP2.datePlaceHolder
                                            
                                            // ... You can check the source to find the other keys.
                                        }}
                                        onDateChange={(date) => { this.setState({ selectedDate: date }) }}
                                    />
                                            <Image source={DROPDOWN} style={stylesP2.dropdown}></Image>
                                        </View>
                                    </View>
                                </View>}

                            <TouchableOpacity style={styles.nextButtonView} onPress = {() =>this.nextPage()}>
                                <Image source={NEXTBUTTON} style={styles.nextButton}></Image>
                                <Text style={styles.nextText}>Next</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default Register;
