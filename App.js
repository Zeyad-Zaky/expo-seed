import React, { PureComponent } from 'react';
import { SafeAreaView, ImageBackground } from 'react-native';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Navigation from 'routers/Navigation';
import { useScreens } from 'react-native-screens';
import GlobalStyles from './src/components/Screen/styles/GlobalStyles';
import { AppLoading,Font } from 'expo'

useScreens();
const BACKGROUND = require('assets/QRCodeScannerPage/BG.png');

export class App extends PureComponent {
  constructor(){
    super()
    this.state = {
     fontLoaded: false
    }
  }
  async componentDidMount(){
    await Font.loadAsync({
      LTAromaBI: require('./src/assets/fonts/Linotype/LTAromaBoldItalic.ttf')
    });
    this.setState({
      fontLoaded: true
    })
  }
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
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
