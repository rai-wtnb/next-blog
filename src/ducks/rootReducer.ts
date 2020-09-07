import { combineReducers } from 'redux';

import categoryMenuReducer from './category-menu/slice';

const rootReducer = combineReducers({
  categoryMenu: categoryMenuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
