import { configureStore } from 'redux-starter-kit';
import devToolsEnhancer from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import network from './network';
import reducer from './reducer';

const store = configureStore({
  reducer,
  middleware: [thunk, network],
  enhancers: [devToolsEnhancer({ realtime: true })],
});

export default store;
