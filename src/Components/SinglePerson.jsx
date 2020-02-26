import React, { Component } from 'react'

class SinglePerson extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(person => this.setState({ person }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <div key={this.state.person.id} className="card bg-light mx-5 my-3">
                    <div className="card-body">
                        <h5 className="card-title">{this.state.person.name}</h5>
                        <p><span className="text-muted">Age: </span>{this.state.person.age}</p>
                        <p><span className="text-muted">Gender: </span>{this.state.person.gender}</p>
                        <p><span className="text-muted">Eye color: </span>{this.state.person.eye_color}</p>
                        <p><span className="text-muted">Hair color: </span>{this.state.person.hair_color}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SinglePerson
