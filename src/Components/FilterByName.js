import React from "react";
import { Form } from "react-bootstrap";
function FilterByName({ inputSearch, setInputSearch }) {
    return (
        <div>
            <Form.Control
                type="email"
                placeholder="Enter a movie name"
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
            />
        </div>
    );
}

export default FilterByName;
