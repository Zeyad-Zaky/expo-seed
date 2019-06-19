import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Navigation from 'routers/Navigation';

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
