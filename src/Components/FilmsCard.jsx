import React from 'react';

const FilmCard = props => {
    return (
        <div className="card text-dark" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.film.title}</h5>
                <p className="card-text">{props.film.description}</p>
            </div>
        </div>
    )
}

export default FilmCard