import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';

const Camera: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <ExpoCamera style={{ flex: 1 }} />
    </View>
  );
}
export default Camera;
