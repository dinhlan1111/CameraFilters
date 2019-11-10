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
  const hatWidth = faceWidth * 1.6
  const hatHeight = faceHeight *1.5
  const transformAngle = (
    angleRad = Math.atan(
      (rightEyePosition.y - leftEyePosition.y) /
      (rightEyePosition.x - leftEyePosition.x)
    )
  ) => angleRad * 180 / Math.PI
  return (
    <View style={{
      position: 'absolute',
      left: leftEyePosition.x - hatWidth * 0.56,
      top: leftEyePosition.y - hatHeight * 0.77
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
