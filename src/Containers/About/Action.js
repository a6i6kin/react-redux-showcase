import axios from "axios";

const TEST_ACTION = 'TEST_ACTION';	//type]
const FETCH_TWEETS = 'FETCH_TWEETS';
const FETCH_TWEETS_FULFILLED = 'FETCH_TWEETS_FULFILLED';
const FETCH_TWEETS_REJECTED = 'FETCH_TWEETS_REJECTED';
const ADD_TWEET = 'ADD_TWEET';
const UPDATE_TWEET = 'UPDATE_TWEET';
const DELETE_TWEET = 'DELETE_TWEET';


// export function loadUnitData() {
// 	return (dispatch, getState) => {
// 		fetchData()
// 			.then(data => {
// 				dispatch({
// 					type : TEST_ACTION,
// 					payload : data
// 				})
// 			});
// 	}
// }

const onTestAction = (meta, payload, error) => {
	return (dispatch, getState) => {
		fetch('http://rest.learncode.academy/api/reacttest/tweets')
			.then(data => {
				return data.json();
			}).then(function (json) {
			dispatch({
				type: TEST_ACTION,
				payload: json
			})
		})
	};
};

const onFetchTweets = () => {
	return function (dispatch) {
		/*
		 http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
		 If you get console errors due to bad data:
		 - change "reacttest" below to any other username
		 - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
		 */
		console.log('onFetchTweets Action');
		axios.get("http://rest.learncode.academy/api/reacttest/tweets")
			.then((response) => {
				dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
			})
			.catch((err) => {
				dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
			})
	}
}

const onAddTweet = (id, text) => {
	return {
		type: 'ADD_TWEET',
		payload: {
			id,
			text,
		},
	}
}

const onUpdateTweet = (id, text) => {
	return {
		type: 'UPDATE_TWEET',
		payload: {
			id,
			text,
		},
	}
}

const onDeleteTweet = (id) => {
	return (dispatch) => dispatch(onDeleteTweet({type: 'DELETE_TWEET', payload: id}));
}

export {
	onTestAction,
	onFetchTweets,
	onAddTweet,
	onUpdateTweet,
	onDeleteTweet,
	FETCH_TWEETS,
	TEST_ACTION,
	FETCH_TWEETS_FULFILLED,
	FETCH_TWEETS_REJECTED,
	ADD_TWEET,
	UPDATE_TWEET,
	DELETE_TWEET
};
