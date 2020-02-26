import React, { Component } from 'react'

class SingleFilm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            film: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(film => this.setState({ film }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <div key={this.state.film.id} className="card bg-light mx-5 my-3">
                    <div className="card-body">
                        <h5 className="card-title">{this.state.film.title}</h5>
                        <p>{this.state.film.description}</p>
                        <p><span className="text-muted">Director: </span>{this.state.film.director}</p>
                        <p><span className="text-muted">Producer: </span>{this.state.film.producer}</p>
                        <p><span className="text-muted">Released: </span>{this.state.film.release_date}</p>
                        <p><span className="text-muted">RT Score: </span>{this.state.film.rt_score}%</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleFilm
