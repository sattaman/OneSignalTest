import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

export default class App extends Component {

constructor(properties) {
    super(properties);
    console.log('OneSignal.init')
    OneSignal.init("2b3dce47-d9f2-4f42-a388-3d66b049b433", {kOSSettingsKeyAutoPrompt : true});


    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  } 

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Test push notifications!!</Text>
      </View> 
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
