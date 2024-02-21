import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const vocabulary = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario
  };

  return (
    <Container>
    <Row className="justify-content-center mt-5">
      <Col xs={12} md={8}>
        <h2>Aprende nuevas palabras</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="spanishWord">
            <Form.Label>Palabra en español</Form.Label>
            <Form.Control type="text" placeholder="Palabra en español" />
          </Form.Group>

          <Form.Group controlId="englishWord">
            <Form.Label>Palabra en inglés</Form.Label>
            <Form.Control type="text" placeholder="Palabra en inglés" />
          </Form.Group>

          <Form.Group controlId="pronunciationAudio">
            <Form.Label>Audio de pronunciación</Form.Label>
            <Form.Control type="file" accept="audio/*" />
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="file" accept="image/*" />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Guardar
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
  );
};

export default vocabulary;
