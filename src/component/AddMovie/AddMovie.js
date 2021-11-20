import { Modal, Button, Form } from 'react-bootstrap';
import React from "react";
import PropTypes from 'prop-types';
import Rate from '../Rate/Rate';

const Modale = function MyVerticallyCenteredModal(props) {

    const [newMovie, setNewMovie] = React.useState({
        title: ``,
        description: ``,
        urlPoster: ``,
        rate: 0,
    });
    const onChangeHandler = (e) =>
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });

    const handleClick = (e) => {
        e.preventDefault();
        props.handleAdd(newMovie);
        props.onHide();
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Ajouter un film
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="movie title" name="title" onChange={onChangeHandler}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Poster URL</Form.Label>
                        <Form.Control type="text" placeholder="poster URL" name="posterUrl" onChange={onChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" onChange={onChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Rate</Form.Label>
                        <Form.Control type="text"  placeholder="rate" name="rate" onChange={onChangeHandler}/>
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={(e) => {
                    handleClick(e);
                }}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

Modale.propTypes = {
    onHide: PropTypes.func.isRequired,
    handleAdd: PropTypes.func.isRequired,
};

export default Modale;