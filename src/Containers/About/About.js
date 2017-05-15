import React, {Component} from 'react';
import {connect} from 'react-redux';
import {onTestAction, onFetchTweets, onDeleteTweet, TEST_ACTION, FETCH_TWEETS} from './Action';
import Button from '../../Components/Ui/Button/Button';
import SmartTweetTable from '../../Components/Ui/Table/SmartTweetTable'

// helper meetod to fatch the current state and map it to the props.
// state is the global state of the app, (for example the whole store)
// ownProps are the props from the parent component.
const mapStateToProps = (state, ownProps) => {

	return {tweets: state.tweets || []};
};

let actionType = TEST_ACTION;

// Helper for map the actions to the props.
const mapDispatchToProps = (dispatch) => {

	// const testAction = dispatch(onTestAction(null, {type: 'any'}, false));

	const testAction = () => {
		dispatch(onTestAction(null, {buttonLabel: 'Changed with Reducer'}, false))
	};

	const getFeedsAction = () => {
		dispatch(onFetchTweets());
	};

	return {testAction, getFeedsAction,
		onDeleteTweet(id){
			console.log('onDeleteTweet ', id);
			onDeleteTweet(id);
	}
	};

};


class About extends Component {

	constructor(props) {
		super(props);

		this.onClickTest = this.onClickTest.bind(this);
		this.onLoadTweetsClick = this.onLoadTweetsClick.bind(this);
		this.onDeleteTweetClick = this.onDeleteTweetClick.bind(this);
	}

	onClickTest = () => {
		this.actionType =TEST_ACTION;
		return this.props.testAction();
	};

	onLoadTweetsClick = () => {
		this.actionType = FETCH_TWEETS;
			return this.props.getFeedsAction();
	};

	onDeleteTweetClick = ( id ) => {
		console.log ( 'Delete Tweet click' );
		this.props.onTweetDeleted( id );
	}

	render() {
		//console.log(Button);

		if(this.actionType === FETCH_TWEETS){
			return (
				<div>
					<Button label={this.props.buttonLabel} onClick={this.onClickTest}/>
					<SmartTweetTable tweets={this.props.tweets} actionType={this.actionType} onDelete={this.props.onDeleteTweet}/>
				</div>

			);
		}

		return (
			<div>
				<Button label="Load Tweets" onClick={this.onLoadTweetsClick}/>
				<ul>
					{this.props.tweets.map((key, val) => {
						return <li key={val}>{key.id} {key.text}</li>
					})}
				</ul>
			</div>

		);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(About);
