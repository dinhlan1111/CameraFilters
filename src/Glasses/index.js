import React from 'react'

import { Text, View, Image, YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);
console.disableYellowBox = true;

const Glasses = ({
  face: {
    bounds: {
      size: { width: faceWidth, height: faceHeight }
    },
    leftEyePosition,
    rightEyePosition
  }
}) => {

  const glassesWidth = faceWidth
  const glassesHeight = faceHeight / 3

  //Xoay
  const transformAngle = (
    angleRad = Math.atan(
      (rightEyePosition.y - leftEyePosition.y) /
      (rightEyePosition.x - leftEyePosition.x)
    )
  ) => angleRad * 180 / Math.PI

  return (
    //View filters
    <View style={{
      position: 'absolute',
      left: leftEyePosition.x - glassesWidth * 0.33,
      top: leftEyePosition.y - glassesHeight * 0.4
    }}>
      <Image
        source={require('../../assets/sunglasses.png')}
        style={{
          width: glassesWidth,
          height: glassesHeight,
          resizeMode: 'contain',
          transform: [{ rotate: `${transformAngle()}deg`}]
        }}
      />
    </View>
  );
};

export default Glasses
