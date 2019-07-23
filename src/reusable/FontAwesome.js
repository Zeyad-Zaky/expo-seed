import React from 'react';
import iconMap from 'assets/fonts/font-awesome/font-awesome-cheat-sheet.json';
import { Text, Platform } from 'react-native';
import PropTypes from 'prop-types';

const FontAwesome = ({ size, icon, color, focused }) => {
  const solid = Platform.OS === 'ios' ? 'FontAwesome5Pro-Solid' : 'font-awesome-solid';
  const light = Platform.OS === 'ios' ? 'FontAwesome5Pro-Light' : 'font-awesome-light';

  return (
    <Text
      style={{
        color,
        fontSize: size,
        fontFamily: focused ? solid : light,
      }}
    >
      {iconMap[icon] || iconMap.exclamation}
    </Text>
  );
};

FontAwesome.propTypes = {
  size: PropTypes.number,
  icon: PropTypes.string,
  color: PropTypes.string,
  focused: PropTypes.bool,
};

FontAwesome.defaultProps = {
  size: 12,
  icon: 'exclamation',
  color: 'black',
  focused: 'light',
};
export default FontAwesome;
