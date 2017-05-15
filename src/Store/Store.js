import { createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import testReducer from '../Containers/About/Reducer';

import applyMiddleware from 'redux/lib/applyMiddleware';

import compose from 'redux/lib/compose';

const enhance= compose(

	// list of middlewares that we are using in our app
	applyMiddleware(
		reduxThunk,
	),

);
// start our store in a correct way
const store = createStore( testReducer, {}, enhance );

export default store;
