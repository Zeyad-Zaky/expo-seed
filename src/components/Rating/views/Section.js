import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { View as AnimatedView } from 'react-native-animatable';

const Section = ({ title, children }) => (
  <AnimatedView
    animation="bounceInUp"
    style={{ backgroundColor: '#A5D2FF', marginBottom: 30, borderRadius: 10, overflow: 'hidden' }}
  >
    <View
      style={{
        backgroundColor: 'white',
        padding: 10,
        width: '60%',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontWeight: '500' }}>{title}</Text>
    </View>

    <View style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 15, paddingBottom: 15 }}>
      {children}
    </View>
  </AnimatedView>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Section.defaultProps = {
  title: 'Section Title',
};

export default Section;
