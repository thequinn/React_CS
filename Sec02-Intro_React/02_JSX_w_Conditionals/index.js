function greetings () {
	const greet = 'Hello, Get an even number to win.';
	return greet;
}

function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

class JSXDemo extends React.Component {
	render() {
		const num = getNum();
		let msg;
		if (num % 2 === 0) {
			msg = 
				<div>
					<h2>You Win!</h2>
					<img src="3ww-award-oscar-2098578.jpg" />
				</div>
		}
		else {
			msg = <p>You Lose! </p>
		}

		return (
			<div>
				<h1>{greetings()}</h1>
				{msg}
			</div>
		); 
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));