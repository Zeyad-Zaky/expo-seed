import React, { PureComponent } from 'react';
import { SafeAreaView, ImageBackground } from 'react-native';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Navigation from 'routers/Navigation';
import { useScreens } from 'react-native-screens';
import GlobalStyles from './src/components/Screen/styles/GlobalStyles';

useScreens();
const BACKGROUND = require('assets/QRCodeScannerPage/BG.png');
// USED
export class App extends PureComponent {
  render() {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <Provider store={store}>
          <ImageBackground style={{ width: null, height: null, flex: 1 }} source={BACKGROUND}>
            <Navigation />
          </ImageBackground>
        </Provider>
      </SafeAreaView>
    );
  }
}

export default App;
