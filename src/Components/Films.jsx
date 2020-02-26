import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Films.css";

class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(films => this.setState({ films }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                {this.state.films.map(film => {
                    return (
                        <div key={film.id} className="card bg-light mx-5 my-3">
                            <div className="card-body">
                                <h5 className="card-title">{film.title}</h5>
                                <p className="card-text">{film.description}</p>
                                <Link to={`/films/${film.id}`}>
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

export default Films
