import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Navigation from 'routers/Navigation';
import GlobalStyles from './src/components/Screen/styles/GlobalStyles';

export class App extends React.Component {
  render() {
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
