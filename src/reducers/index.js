import { combineReducers } from 'redux';
import StudentReducer from './StudentReducer';
import StudentReducer2 from './StudentReducer2';

const rootReducer = combineReducers({
	students: StudentReducer,
	students2: StudentReducer2
});

export default rootReducer;