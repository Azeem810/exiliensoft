import { combineReducers } from 'redux';
import { AllBlogsSlice } from './AllBlogsSlice';
const appReducer = combineReducers({
  AllBlogsSlice:AllBlogsSlice.reducer,
});
const rootReducer = (state?:any, action?:any) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};
export default rootReducer;
