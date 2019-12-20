import React from 'react'

import { Text, View, Image, YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);
console.disableYellowBox = true;

const Flower = ({
  face: {
    bounds: {
      size: { width: faceWidth, height: faceHeight }
    },
    leftEyePosition,
    rightEyePosition
  }
}) => {
  const flowerWidth = faceWidth * 1.2
  const flowerHeight = faceHeight / 2.5

  //Xoay
  const transformAngle = (
    angleRad = Math.atan(
      (rightEyePosition.y - leftEyePosition.y) /
      (rightEyePosition.x - leftEyePosition.x)
    )
  ) => angleRad * 180 / Math.PI
  return (
    //View fliters
    <View style={{
      position: 'absolute',
      left: leftEyePosition.x - flowerWidth * 0.35,
      top: leftEyePosition.y - flowerHeight * 1.3
    }}>
      <Image
        source={require('../../assets/flower.png')}
        style={{
          width: flowerWidth,
          height: flowerHeight,
          resizeMode: 'contain',
          transform: [{ rotate: `${transformAngle()}deg`}]
        }}
      />
    </View>
  );
};

export default Flower
