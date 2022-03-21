import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: props.id,
			audio: new Audio(props.sound)
		}
	}

	render() {
		return (
			<button
				className='drum-pad'
				onClick={() => this.state.audio.play()}
				value={this.state.value}
			>{this.state.value}</button>
		)
	}
}
export default Button