import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Badge } from 'reactstrap';

const integrantes = [
  { id: 1, nombre: 'Kevin Adolfo Gutiérrez Salinas', rol: 'Full-Stack & Integración API REST' },
  { id: 2, nombre: 'Integrante 2', rol: 'Backend Express & Lógica de Negocio' },
  { id: 3, nombre: 'Integrante 3', rol: 'Frontend React - Caso Food DEI' },
  { id: 4, nombre: 'Integrante 4', rol: 'Frontend React - Ejercicio 1' }
];

export default function UserDev() {
  return (
    <Row>
      {integrantes.map((dev) => (
        <Col xs="12" md="6" key={dev.id} className="mb-3">
          <Card className="shadow-sm">
            <CardBody>
              <Badge color="dark" className="mb-2">Integrante #{dev.id}</Badge>
              <CardTitle tag="h5" className="fw-bold">{dev.nombre}</CardTitle>
              <CardSubtitle className="text-muted">{dev.rol}</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
}