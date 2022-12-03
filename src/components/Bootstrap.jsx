import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from 'react-bootstrap';

import React from 'react';

function Bootstrap() {
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col md>
              <Form.Group controlId="formEmail">
                <Form.Label>Email adress</Form.Label>
                <Form.Control type="email" placeholder="Example@email.com" />
                <Form.Text>You can trust us !</Form.Text>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="user123" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="secondary" type="submit">
            LogIn
          </Button>
        </Form>
        <Card className="mb-3" style={{ color: '#000', width: '100%' }}>
          <Card.Img
            style={{
              height: 300,
              width: '50%',
            }}
            src={
              'https://e7.pngegg.com/pngimages/903/953/png-clipart-red-question-mark-capitalization-red-question-mark.png'
            }
          />
          <Card.Body>
            <Card.Title>example </Card.Title>
            <Card.Text> Learning bootstrap </Card.Text>
            <Button variant="primary"> read more.. </Button>
          </Card.Body>
        </Card>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test3</Breadcrumb.Item>
        <Button> Tester </Button>
        <Alert variant="success">Alert</Alert>
      </Container>
    </div>
  );
}

export default Bootstrap;
