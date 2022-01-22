import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function AddMovie({ add }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterUrl, setPosterUrl] = useState("");
    const [rate, setRate] = useState("");

    const handleMovie = () => {
        let newMovie = { title, description, posterUrl, rate };
        handleClose();
        add(newMovie);
        setTitle("");
        setDescription("");
        setPosterUrl("");
        setRate("");
    };
    // modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {/* modal */}
            <Button variant="primary" onClick={handleShow}>
                ADD
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> ADD Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>title</label>
                    <br />
                    <input
                        placeholder="enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br />
                    <label>description</label>
                    <br />
                    <input
                        placeholder="enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <br />
                    <label>Poster URL</label>
                    <br />
                    <input
                        placeholder="enter posterurl"
                        value={posterUrl}
                        onChange={(e) => setPosterUrl(e.target.value)}
                    />
                    <br />
                    <label>rate</label>
                    <br />
                    <input
                        placeholder="enter rate"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleMovie()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddMovie;
