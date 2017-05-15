import React, {PropTypes} from 'react';

const TweetTable = (props) => {

	const { tweets, onDelete } = props;

	console.log('TweetTable ', tweets);
	const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text} <button onClick={onDelete(tweet.id) || null} >x</button> </li> );

	return <ul>{mappedTweets}</ul>;

};


 TweetTable.propTypes = {
	tweets: PropTypes.array,
	 actionType: PropTypes.string,
	 onDelete: PropTypes.func,
 };

TweetTable.defaultProps = {
	tweets: [],
	actionType: null,
};

export default TweetTable;
