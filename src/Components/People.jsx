import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./People.css";

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(people => this.setState({ people }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                {this.state.people.map(person => {
                    return (
                        <div key={person.id} className="card bg-light mx-5 my-3">
                            <div className="card-body">
                                <h5 className="card-title">{person.name}</h5>
                                <p className="card-text"><span className="text-muted"></span>{person.age}</p>
                                <Link to={`/People/${person.id}`}>
                                    <button className="btn btn-sm btn-dark">Learn More</button>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default People
