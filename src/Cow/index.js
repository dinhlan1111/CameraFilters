import React from 'react'

import { Text, View, Image, YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);
console.disableYellowBox = true;

const Cow = ({
  face: {
    bounds: {
      size: { width: faceWidth, height: faceHeight }
    },
    leftEyePosition,
    rightEyePosition
  }
}) => {
  const cowWidth = faceWidth
  const cowHeight = faceHeight

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
      left: leftEyePosition.x - cowWidth * 0.33,
      top: leftEyePosition.y - cowHeight * 0.7
    }}>
      <Image
        source={require('../../assets/cow.png')}
        style={{
          width: cowWidth,
          height: cowHeight,
          resizeMode: 'contain',
          transform: [{ rotate: `${transformAngle()}deg`}]
        }}
      />
    </View>
  );
};

export default Cow
