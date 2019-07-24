import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Image, Path, Defs, ClipPath } from 'react-native-svg';

const { width } = Dimensions.get('window');

const BACKGROUND_HEADER = require('assets/header_background.png');
// USED
const PLAYER_CARD_LOGO =
  'https://sa.kapamilya.com/absnews/abscbnnews/media/2018/sports/10/06/20181006-ronaldo.jpg'; // USED

const GLOBAL_BOTTOM_DIFFERENCE = 20;
const GLOBAL_MID_HEIGHT = 32;
const GLOBAL_MAXIMUM_WIDTH = width * 0.7;
const GLOBAL_MAXIMUM_HEIGHT = 48;

const getFirstPathSingleCommand = ind => {
  const START_TOP_X = 0;
  const START_BOTTOM_X = GLOBAL_BOTTOM_DIFFERENCE;
  const END_TOP_X = GLOBAL_MAXIMUM_WIDTH;
  const END_BOTTOM_X = END_TOP_X - GLOBAL_BOTTOM_DIFFERENCE;

  const LEFT_START_END_X = START_TOP_X + (START_BOTTOM_X - START_TOP_X) / 2;
  const RIGHT_START_END_X = END_BOTTOM_X + (END_TOP_X - END_BOTTOM_X) / 2;

  const firstPoint = `${START_TOP_X},${0}`;
  const secondPoint = `${END_TOP_X},${0}`;

  const thirdPoint = `${END_BOTTOM_X},${GLOBAL_MID_HEIGHT}`;
  const fourthPoint = `${START_BOTTOM_X},${GLOBAL_MID_HEIGHT}`;

  const secondThirdMid = `${RIGHT_START_END_X},${GLOBAL_MID_HEIGHT}`;
  const fourthFirstMid = `${LEFT_START_END_X},${GLOBAL_MID_HEIGHT}`;
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
};
const getSecondPathSingleCommand = ind => {
  const START_TOP_X = GLOBAL_MAXIMUM_WIDTH * 0.4;
  const START_BOTTOM_X = START_TOP_X + GLOBAL_BOTTOM_DIFFERENCE * 0.5;
  const END_TOP_X = GLOBAL_MAXIMUM_WIDTH - GLOBAL_BOTTOM_DIFFERENCE * 1.5;
  const END_BOTTOM_X = GLOBAL_MAXIMUM_WIDTH - GLOBAL_BOTTOM_DIFFERENCE * 2;

  const LEFT_START_END_X = START_TOP_X + (START_BOTTOM_X - START_TOP_X) / 2;
  const RIGHT_START_END_X = END_BOTTOM_X + (END_TOP_X - END_BOTTOM_X) / 2;

  const firstPoint = `${START_TOP_X},${GLOBAL_MID_HEIGHT}`;
  const secondPoint = `${END_TOP_X},${GLOBAL_MID_HEIGHT}`;

  const thirdPoint = `${END_BOTTOM_X},${GLOBAL_MAXIMUM_HEIGHT}`;
  const fourthPoint = `${START_BOTTOM_X},${GLOBAL_MAXIMUM_HEIGHT}`;

  const secondThirdMid = `${RIGHT_START_END_X},${GLOBAL_MAXIMUM_HEIGHT}`;
  const fourthFirstMid = `${LEFT_START_END_X},${GLOBAL_MAXIMUM_HEIGHT}`;
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
};

const getFirstPathCommands = boundaries => {
  if (boundaries) {
    const { start, end } = boundaries;
    let commands = '';
    for (let counter = start; counter <= end; counter += 1) {
      commands += `${getFirstPathSingleCommand(counter)} `;
    }
    return commands;
  }
  return `${getFirstPathSingleCommand(0)} ${getFirstPathSingleCommand(
    1
  )} ${getFirstPathSingleCommand(2)} ${getFirstPathSingleCommand(3)}`;
};

const getSecondPathCommands = () =>
  `${getSecondPathSingleCommand(0)} ${getSecondPathSingleCommand(1)} ${getSecondPathSingleCommand(
    2
  )} ${getSecondPathSingleCommand(3)}`;

const getRightCurveCommands = () => {
  const END_X = GLOBAL_MAXIMUM_WIDTH * 0.295;
  const MID_X = END_X + 4;
  const MID_Y = GLOBAL_MID_HEIGHT * 0.5;
  const firstPoint = `${END_X},${0}`;
  const secondPoint = `${END_X},${GLOBAL_MID_HEIGHT}`;

  const firstSecondMid = `${MID_X},${MID_Y}`;
  return `M ${firstPoint} C ${firstPoint} ${firstSecondMid} ${secondPoint}`;
};

const StatusBar = props => {
  const { title } = props;
  return (
    <Svg
      style={{
        height: 70,
        width: width * 0.7,
      }}
    >
      <Defs>
        <ClipPath id="imageClip">
          <Path
            d={`${getRightCurveCommands()} ${getFirstPathCommands({ start: 1, end: 3 })}`}
            strokeWidth={0}
          />
        </ClipPath>
        <ClipPath id="headerClip">
          <Path d={getFirstPathCommands()} strokeWidth={0} />
          <Path d={getSecondPathCommands()} strokeWidth={0} />
        </ClipPath>
      </Defs>
      <Path d={getFirstPathCommands()} strokeWidth={0} />
      <Path d={getSecondPathCommands()} strokeWidth={0} />
      <Image
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        href={BACKGROUND_HEADER}
        clipPath="url(#headerClip)"
      />
      <Image
        x="0%"
        y="0%"
        width="30%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        href={PLAYER_CARD_LOGO}
        clipPath="url(#imageClip)"
        resizeMode="contain"
      />
    </Svg>
  );
};

export default StatusBar;
