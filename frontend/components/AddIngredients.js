import React from 'react';
import { RNCamera } from 'react-native-camera'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const AddIngredients = () => {
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        ref={ref => {
          this.camera = ref;
        }}
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
      />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
          <View><Ionicons size={64} style={styles.snap} name="ellipse-outline"/></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri); 
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  snap: {
    color: 'white'
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default AddIngredients;
