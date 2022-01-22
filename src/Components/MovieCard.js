import React from "react";
import { CardGroup, Card } from "react-bootstrap";

function MovieCard({ movie }) {
    return (
        <div>
            <CardGroup style={{ width: "18rem" }}>
                <Card.Img variant="top" src={movie.posterUrl} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.description}</Card.Text>
                    <Card.Text>{movie.rate}</Card.Text>
                </Card.Body>
            </CardGroup>
        </div>
    );
}

export default MovieCard;
