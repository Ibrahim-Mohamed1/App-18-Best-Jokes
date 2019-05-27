import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            joke: []
        }
    }

    getJoke = () => {
        axios.get(`https://vschool-cors.herokuapp.com?url=https://official-joke-api.appspot.com/jokes/random`).then(res => {
            this.setState({
                joke: res.data
            })
        })
    }

    render() {
        return (
            <Provider value={{
                getJoke: this.getJoke,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}