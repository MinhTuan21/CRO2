import React from 'react';
import { View, Button } from 'react-native';

export default function ControlPanel() {
  return (
    <View>
      <Button title="Play/Pause" onPress={() => console.log('Toggle Play/Pause')} />
      <Button title="Next" onPress={() => console.log('Next Track')} />
      <Button title="Previous" onPress={() => console.log('Previous Track')} />
    </View>
  );
}
