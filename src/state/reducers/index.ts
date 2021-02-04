import { combineReducers } from 'redux';
import { repositoriesReducer } from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export { reducers };

export type RootState = ReturnType<typeof reducers>;
