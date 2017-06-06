class App extends React.Component{

	state = { counter: 0 };

	incrementByMe = (incrementBy) =>{
		this.setState((prevState)=>({
			counter:prevState.counter+incrementBy
		}));

	}



	render(){
		return(
			<div>
			<Button buttValue="PLUS ONE" incrementBy={1} incrementFunct={this.incrementByMe}/ >
			<Button buttValue="PLUS TEN" incrementBy={10} incrementFunct={this.incrementByMe}/ >
			<Button buttValue="PLUS HUNDRED" incrementBy={100} incrementFunct={this.incrementByMe}/ >
			<Button buttValue="PLUS THOUSAND" incrementBy={1000} incrementFunct={this.incrementByMe}/ >
			<div>
			<Counter counterIs={this.state.counter} />
			</div>
			</div>
			);
	}

}



const Counter = (props) =>{
	return(
		<div className="counter">Counter is: {props.counterIs}</div>	
		);
}


class Button extends React.Component{

	handleInc = () =>{
		
		this.props.incrementFunct(this.props.incrementBy);
	}

	render(){
		return(
			<div className="button" onClick={this.handleInc} >
			{this.props.buttValue}
			</div>
			)
	}
}

ReactDOM.render(<App/>,document.getElementById('root'))