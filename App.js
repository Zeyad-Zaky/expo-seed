import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Navigation from 'routers/Navigation';
import GlobalStyles from "./src/components/Screen/styles/GlobalStyles";
import { SafeAreaView } from "react-native";
import { Fonts } from "./src/utils/fonts"
import { AppLoading,Font } from 'expo'

export class App extends React.Component {
  constructor(){
    super()
    this.state = {
     fontLoaded: false
    }
  }
  async componentDidMount(){
    await Font.loadAsync({
      LTAromaBI: require('./src/assets/fonts/LTAromaBoldItalic.ttf')
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
        <Navigation />
        
      </Provider>
      </SafeAreaView>
    );
  }
}

export default App;
