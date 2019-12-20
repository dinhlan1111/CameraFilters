import React from 'react'

import { Text, View, Image, YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);
console.disableYellowBox = true;

const Mouth = ({
  face: {
    bounds: {
      size: { width: faceWidth, height: faceHeight }
    },
    leftEyePosition,
    rightEyePosition,
    bottomMouthPosition
  }
}) => {
  const mouthWidth = faceWidth * 0.9
  const mouthHeight = faceHeight * 0.9

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
      left: bottomMouthPosition.x - mouthWidth * 0.49,
      top: bottomMouthPosition.y - mouthHeight * 0.52
    }}>
      <Image
        source={require('../../assets/mouth.png')}
        style={{
          width: mouthWidth,
          height: mouthHeight,
          resizeMode: 'contain',
          transform: [{ rotate: `${transformAngle()}deg`}]
        }}
      />
    </View>
  );
};

export default Mouth
