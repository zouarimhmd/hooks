import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from "react-bootstrap";
import './MovieList.css';
import PropTypes from 'prop-types';
import Rate from '../Rate/Rate';

export const MoviesList = ({ movies }) => {

    return (
        <>
            <Container className='d-flex flex-row justify-content-center'>
                <div className="d-flex flex-row flex-wrap" style={{ width: '100%' }}>
                    {
                        movies.map((movie, key) => {
                            return (
                                
                                    <Card className="movie" style={{ width: '18rem', height: '31²rem' }} key={key}> 
                                        <Card.Img variant="top" src={movie.posterUrl} style={{ height: '20rem' }} />
                                        <Card.Body>

                                            <Card.Title>{movie.title}</Card.Title>
                                            <Card.Text>

                                                {movie.description}
                                            </Card.Text>
                                            <div className='row'>
                                                <Rate rate={movie.rate} />
                                            </div>
                                        </Card.Body>
                                    </Card>
                            )
                        })
                    }
                </div>
            </Container>

        </>
    );
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default MoviesList;