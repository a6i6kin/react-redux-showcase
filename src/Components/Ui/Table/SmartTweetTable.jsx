import React, { Component, PropTypes } from 'react';
import TweetTable from './TweetTable';

class SmartTweetTable extends Component {

	constructor( props ) {

		super( props );
		const { tweets, actionType, onDelete } = props;

		this.state = {
			tweets,
			actionType
		};

	}

	render(){
		console.log('render tweets ', this.state.tweets);
		return <TweetTable tweets={this.props.tweets} onDelete={this.props.onDelete || null}/>;
	}

}

export default SmartTweetTable;
