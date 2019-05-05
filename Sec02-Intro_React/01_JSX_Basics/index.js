
function getMood() {
	const moods = [ 'Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid' ];
	return moods[Math.floor(Math.random() * moods.length)];
}
function greetings () {
	const greet = 'Hello';
	return greet;
}

class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>{greetings()} from the world!</h1>
			</div>
		); 
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));