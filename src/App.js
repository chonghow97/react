import React, { Component } from 'react';

export class App extends Component {
	state = {
		counter: 1,
	};
	inc = () => this.setState({ counter: counter + 1 });
	render() {
		const { counter } = this.state;
		return (
			<>
				<span>Counter</span> {counter}
				<button onclick={this.inc}>Click me</button>
			</>
		);
	}
}

export default App;
