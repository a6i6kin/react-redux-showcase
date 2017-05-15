import React, { Component, PropTypes } from 'react';
import Button from  '../Button/Button';


class SmartButton extends Component {

	static propTypes = {
		label: PropTypes.string.isRequired,
	};

	constructor( props ) {

		super( props );
		const { label } = props;

		this.state = {
			label,
		};

		this.testButtonClick = this.testButtonClick.bind( this );
	}

	componentWillMount() {
		console.log( 'Stuff mounting' );
	}

	/* shouldComponentUpdate( nextProps, nextState ) {

	 //console.log( nextProps, nextState );
	 if ( this.state.label === nextState.label ) return false;

	 return true;
	 }*/

	testButtonClick(){

		this.setState( {
			label: 'New Label.'
		} );

	}

	render() {
		console.log ( 'Rendering Smart Button...' );
		return <Button onClick={this.testButtonClick} label={this.state.label} />;
	}

}

export default SmartButton;
