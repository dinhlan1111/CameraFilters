import React from 'react'

import { Text, View, Image } from 'react-native';

const Nose = ({
  face: {
    bounds: {
      origin: { x: containerX, y: containerY },
      size: { width: faceWidth , height: faceHeight}
    },
    leftEyePosition,
    noseBasePosition,
    rightEyePosition
  }
}) => {
  const eyeWidth = faceWidth / 4
  const noseWidth = eyeWidth;
  const noseHeight = eyeWidth /1.5

  const translatedEyePositionX = eyePosition => eyePosition.x - eyeWidth / 2 - containerX
  const translatedEyePositionY = eyePosition => eyePosition.y - eyeWidth / 2 - containerY


  const noseTransformAngle = (
    angleRad = Math.atan(
      (rightEyePosition.y - leftEyePosition.y) /
      (rightEyePosition.x - leftEyePosition.x)
    )
  ) => angleRad * 180 / Math.PI

  return (
    <View style={{ position: 'absolute', left: containerX, top: containerY }}>
    <Image
      source={require('../../assets/dog_nose.png')}
      style={{
        width: noseWidth,
        height: noseHeight,
        position: 'absolute',
        left: noseBasePosition.x - noseWidth / 2 - containerX,
        top: noseBasePosition.y - noseWidth / 3 - containerY,
        transform: [{ rotate: `${noseTransformAngle()}deg`}]
      }}
    />

    </View>
  );
};

export default Nose
