import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";

function Employees() {
  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col>
              <h1>Employees</h1>
              <Button variant="primary">Add Employee</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <Table>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>johndoe@email.com</td>
                    <td>CEO</td>
                    <td className="d-flex justify-content-center gap-3">
                      <Button variant="primary">
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                      <Button variant="danger">
                        <i className="bi bi-trash" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Employees;
