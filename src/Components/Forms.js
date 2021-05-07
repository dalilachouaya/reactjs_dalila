import React from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
function Forms() {
  return (
    <div>
      <Container>
        <Form className="App-Form">
          <Row>
            <Col md>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Example@email.com " />
                <Form.Text className="text-muted">
                  We'll never share your email address , trust us !!
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password " />
                <Form.Text className="text-muted">Required password</Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="secondary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
      </div>
  );
}

export default Forms;
