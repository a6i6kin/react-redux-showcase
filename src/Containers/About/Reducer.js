import {
	TEST_ACTION,
	FETCH_TWEETS,
	FETCH_TWEETS_REJECTED,
	FETCH_TWEETS_FULFILLED,
	ADD_TWEET,
	UPDATE_TWEET,
	DELETE_TWEET
} from './Action';


const testReducer = (state = {
	tweets: [],
	fetching: false,
	fetched: false,
	error: null,
}, action) => {


	switch (action.type) {

		case TEST_ACTION:
			console.log('In reducer TEST_ACTION: ', action);
			return Object.assign({}, state, {tweets: action.payload});


		case FETCH_TWEETS:
			console.log('In reducer FETCH_TWEETS: ', action);
			return Object.assign({}, state, {fetching: true});

		case FETCH_TWEETS_REJECTED:
			return Object.assign({}, state, {fetching: false, error: action.payload});

		case FETCH_TWEETS_FULFILLED:
			console.log('In reducer FETCH_TWEETS_FULFILLED: ', action);
			return Object.assign({}, state, {
				fetching: false,
				fetched: true,
				tweets: action.payload,
			});

		case ADD_TWEET:
			return Object.assign({}, state, {tweets: [...state.tweets, action.payload]});

		case UPDATE_TWEET:
			const {id, text} = action.payload;
			const newTweets = [...state.tweets];
			const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id);
			newTweets[tweetToUpdate] = action.payload;

			return Object.assign({}, state, {tweets: newTweets});

		case DELETE_TWEET:
			console.log("DELETE_TWEET Reducer");
			return Object.assign({}, state, {
				tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
			});

		default:
			return state;
	}


}


export default testReducer;
