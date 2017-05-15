import React, { Component } from 'react';
import { Provider } from 'react-redux';

import '../styles/index.scss';
import store from './Store/Store';
import About from './Containers/About/About';



export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<About/>
			</Provider>

		)
	}
}
