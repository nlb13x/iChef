import React, {useState} from 'react';
import { RNCamera } from 'react-native-camera'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  Image,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const AddIngredients = () => {

  const [path, setPath] = useState(null);
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      setPath(data.uri);
      setVisibleStatusBar(true);
      console.log(data.uri);
    }
  } 

  renderImage = () => {
    return (
      <View>
        <Image
          source={{uri : path}}
          style={styles.preview}
        />
        <Text
          style={styles.cancel}
          onPress={() => {
            setPath(null)
            console.log('clicked');
            setVisibleStatusBar(false);
          }}
        >
        <Ionicons size={32} style={styles.snap} name="close-outline"/>
        </Text>
      </View>
    )
  }

  renderCamera = () => {
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
      <View style={{flex: 0, flexDirection: 'column', justifyContent: 'center'}}>
        <TouchableOpacity onPress={takePicture.bind(this)} style={styles.capture}>
          <View><Ionicons size={64} style={styles.snap} name="ellipse-outline"/></View>
        </TouchableOpacity>
      </View>
    </View>
    )
  }



  return (
    <View style={styles.container}>
      <View>
        <StatusBar hidden={visibleStatusBar} />
      </View>
      {path ? renderImage() : renderCamera()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  snap: {
    color: 'white'
  },
  capture: {
    flex: 0,
    alignSelf: 'center',
  },
  cancel : {
    position: 'absolute',
    left: 10,
    top: 40,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  }
});

export default AddIngredients;
