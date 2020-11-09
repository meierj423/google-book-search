import React from "react";
import { Form, Button } from "react-bootstrap";

function FormComp() {
  return (
    <Form>
      <Form.Group controlId="formBook">
        <Form.Label>
          <strong>Book</strong>
        </Form.Label>
        <Form.Control type="book" placeholder="Lord of the Rings" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormComp;
