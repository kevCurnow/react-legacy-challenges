import React, {Component} from 'react';

export default class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ''
        }
    }

    fetchDoggo() {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(json => this.setState({
            img: json.message
        }));
    }

    render() {
        return (
            <div>
                <button onClick={() => this.fetchDoggo()}>Fetch!</button>
                <img src={this.state.img} alt="doggo"/>
            </div>
        )
    }
}