import React, { Component } from 'react';
import { withData } from './DataProvider';
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      toggle: true
    }
  }
  componentDidMount(){
    this.props.getJoke()
  }
  getJoke = () => {
    this.props.getJoke()
    this.setState({
      toggle: true
    })
  }
  handleToggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
  }
  render() {
    console.log(this.state.toggle)
    return (
      <div>
        <button className='next' onClick={this.getJoke}>Next Joke</button>
        <button className='punchline'  onClick={this.handleToggle }>Punch Line</button>
        <h1>{this.props.joke.setup}</h1>
        {this.state.toggle ? null : <h2>{this.props.joke.punchline}</h2>}
      </div>
    );
  }
}

export default withData(App);