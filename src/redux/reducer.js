import { combineReducers } from 'redux-immutable';
import reducers from './reducers';

const reducer = combineReducers({
  ...reducers,
});

export default reducer;
