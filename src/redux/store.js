import { createStore } from 'redux';
import rootReducer from './rootReducer';

//createStore function accepts only one reducer
const store = createStore(rootReducer);

export default store;
