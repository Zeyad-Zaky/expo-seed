import React from 'react';
import { ScrollView, View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { Text as AnimatedText } from 'react-native-animatable';
import Rates from 'reusable/Rates';
import FontAwesome from 'reusable/FontAwesome';
import Header from './Header';
import Section from './Section';
import Endorsement from './Endorsement';
import Badges from './Badges';

const BACKGROUND_IMAGE = require('../../../assets/createMatchPage/BG.png');

const RatingScreen = ({ rate, setRating }) => (
  <ImageBackground
    source={BACKGROUND_IMAGE}
    style={{ width: '100%', height: '100%' }}
    imageStyle={{ flex: 1, alignItems: 'center' }}
  >
    <ScrollView
      style={{ flex: 1, marginBottom: 60 }}
      contentContainerStyle={{ padding: 20, flexGrow: 1 }}
    >
      <Header />

      <Section title="Rate Shehab">
        <View style={{ paddingTop: 25, paddingBottom: 25 }}>
          <View
            style={{
              flex: 1,
              width: '40%',
              justifyContent: 'center',
              position: 'absolute',
              top: -40,
              right: 10,
              opacity: 0.1,
            }}
          >
            <AnimatedText
              useNativeDriver
              animation="bounceInRight"
              style={{
                fontFamily: 'bold',
                fontSize: 100,
                color: '#000000',
              }}
            >
              {rate}
            </AnimatedText>
          </View>
          <View style={{ paddingTop: 10, paddingBotom: 10 }}>
            <Rates rate={rate} setRating={setRating} />
          </View>
        </View>
      </Section>
      <Section title="Endorsements">
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Endorsement />
          <Endorsement />
          <Endorsement />
          <Endorsement />
        </View>
      </Section>
      <Section title="Badges">
        <Badges />
      </Section>

      <View
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <FontAwesome icon="angle-left" color="white" size={30} />
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
            backgroundColor: '#A5D2FF',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}
        >
          <Text style={{ fontFamily: 'bold', fontSize: 18 }}>Submit</Text>
        </View>
        <FontAwesome icon="angle-right" color="white" size={30} />
      </View>
    </ScrollView>
  </ImageBackground>
);

RatingScreen.propTypes = {
  rate: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};

export default RatingScreen;
