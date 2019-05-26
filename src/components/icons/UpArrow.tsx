import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export const UpArrowIcon: React.FC<IconProps> = ({ width, height, fill }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 129 129"
    fill={fill || '#000'}
  >
    <Path d="m121.4,61.6l-54-54c-0.7-0.7-1.8-1.2-2.9-1.2s-2.2,0.5-2.9,1.2l-54,54c-1.6,1.6-1.6,4.2 0,5.8 0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2l47-47v98.1c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-98.1l47,47c1.6,1.6 4.2,1.6 5.8,0s1.5-4.2 1.42109e-14-5.8z" />
  </Svg>
);
