import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Image, Path, Defs, ClipPath } from 'react-native-svg';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const BACKGROUND_HEADER = require('assets/header_background.png'); // USED
const MENU_LOGO = require('assets/QRCodeScannerPage/MENU.png');
// USED
const PLAYER_CARD_LOGO =
  'https://sa.kapamilya.com/absnews/abscbnnews/media/2018/sports/10/06/20181006-ronaldo.jpg'; // USED

const getPathSingleCommand = (first, ind) => {
  const bottomDifference = 30;
  const midHeight = 46;
  const maximumHeight = 65;
  const fullWidth = width * 0.7;

  if (first) {
    const START_TOP_X = 0;
    const END_TOP_X = fullWidth;
    const START_BOTTOM_X = bottomDifference;
    const END_BOTTOM_X = END_TOP_X - bottomDifference;

    const LEFT_START_END_X = START_TOP_X + (START_BOTTOM_X - START_TOP_X) / 2;
    const RIGHT_START_END_X = END_BOTTOM_X + (END_TOP_X - END_BOTTOM_X) / 2;

    const firstPoint = `${START_TOP_X},${0}`;
    const secondPoint = `${END_TOP_X},${0}`;

    const thirdPoint = `${END_BOTTOM_X},${midHeight}`;
    const fourthPoint = `${START_BOTTOM_X},${midHeight}`;

    const secondThirdMid = `${RIGHT_START_END_X},${midHeight}`;
    const fourthFirstMid = `${LEFT_START_END_X},${midHeight}`;
    switch (ind) {
      case 1:
        return `C ${secondPoint} ${secondThirdMid} ${thirdPoint}`;
      case 2:
        return `L ${fourthPoint}`;
      case 3:
        return `C ${fourthPoint} ${fourthFirstMid} ${firstPoint}`;
      default:
        return `M ${firstPoint} L ${secondPoint}`;
    }
  } else {
    const START_TOP_X = fullWidth * 0.4;
    const END_TOP_X = fullWidth - bottomDifference * 1.5;
    const START_BOTTOM_X = START_TOP_X + bottomDifference * 0.5;
    const END_BOTTOM_X = fullWidth - bottomDifference * 2;

    const LEFT_START_END_X = START_TOP_X + (START_BOTTOM_X - START_TOP_X) / 2;
    const RIGHT_START_END_X = END_BOTTOM_X + (END_TOP_X - END_BOTTOM_X) / 2;

    const firstPoint = `${START_TOP_X},${midHeight}`;
    const secondPoint = `${END_TOP_X},${midHeight}`;

    const thirdPoint = `${END_BOTTOM_X},${maximumHeight}`;
    const fourthPoint = `${START_BOTTOM_X},${maximumHeight}`;

    const secondThirdMid = `${RIGHT_START_END_X},${maximumHeight}`;
    const fourthFirstMid = `${LEFT_START_END_X},${maximumHeight}`;
    switch (ind) {
      case 1:
        return `C ${secondPoint} ${secondThirdMid} ${thirdPoint}`;
      case 2:
        return `L ${fourthPoint}`;
      case 3:
        return `C ${fourthPoint} ${fourthFirstMid} ${firstPoint}`;
      default:
        return `M ${firstPoint} L ${secondPoint}`;
    }
  }
};

const getFirstPathCommands = () =>
  `${getPathSingleCommand(true, 0)} ${getPathSingleCommand(true, 1)} ${getPathSingleCommand(
    true,
    2
  )} ${getPathSingleCommand(true, 3)}`;

const getSecondPathCommands = () =>
  `${getPathSingleCommand(false, 0)} ${getPathSingleCommand(false, 1)} ${getPathSingleCommand(
    false,
    2
  )} ${getPathSingleCommand(false, 3)}`;

const HeaderComponent = props => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity />
      <View style={{ width: width * 0.7, height: 70 }}>
        <Svg
          style={{
            height: 70,
            width: width * 0.7,
          }}
        >
          <Defs>
            <ClipPath id="clip">
              <Path d={getFirstPathCommands()} fill="red" strokeWidth={0} />
              <Path d={getSecondPathCommands()} fill="red" strokeWidth={0} />
            </ClipPath>
          </Defs>
          <Path d={getFirstPathCommands()} fill="red" strokeWidth={0} />
          <Path d={getSecondPathCommands()} fill="red" strokeWidth={0} />
          <Image
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            href={BACKGROUND_HEADER}
            clipPath="url(#clip)"
          />
          <Image
            x="0%"
            y="0%"
            width="30%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            href={PLAYER_CARD_LOGO}
            clipPath="url(#clip)"
            resizeMode="cover"
          />
        </Svg>
      </View>
      <TouchableOpacity />
    </View>
  );
};

export default HeaderComponent;
/* <TouchableOpacity>
  <Image source={MENU_LOGO} style={styles.menu}></Image>
</TouchableOpacity>
<ImageBackground
  source={PLAYER_CARD_LOGO}
  style={styles.playercard}
  imageStyle={styles.playercardImage}
>
  <Image source={PIC_FRAME_LOGO} style={styles.profilepicture}></Image>
  <Text style={styles.username}>Zeyad Yasser</Text>
  <View style={{}}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
</ImageBackground>


*/
