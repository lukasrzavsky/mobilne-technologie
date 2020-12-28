import { combineReducers } from 'redux';

import JokesReducer from './reducers/jokes';
import SettingsReducer from './reducers/settings';

const reducer = combineReducers({
  jokes: JokesReducer,
  settings: SettingsReducer,
});

export default reducer;
