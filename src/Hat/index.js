import React from 'react'

import { Text, View, Image, YellowBox } from 'react-native';



const Hat = ({
  face: {
    bounds: {
      size: { width: faceWidth, height: faceHeight }
    },
    leftEyePosition,
    rightEyePosition
  }
}) => {
  const hatWidth = faceWidth * 1.5
  const hatHeight = faceHeight * 1.3

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
      left: leftEyePosition.x - hatWidth * 0.35,
      top: leftEyePosition.y - hatHeight * 0.8
    }}>
      <Image
        source={require('../../assets/hat.png')}
        style={{
          width: hatWidth,
          height: hatHeight,
          resizeMode: 'contain',
          transform: [{ rotate: `${transformAngle()}deg`}]
        }}
      />
    </View>
  );
};

export default Hat
