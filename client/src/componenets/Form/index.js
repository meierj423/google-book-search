import React from "react";
import { Form, Button } from "react-bootstrap";

function FormComp({ handleInputChange, handleFormSubmit, query }) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>
          <strong>Book</strong>
        </Form.Label>
        <Form.Control
          id="Title"
          type="text"
          value={query}
          placeholder="Lord of the Rings"
          name="query"
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleFormSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default FormComp;
