import React from "react";

import EmployeeService from "../services/employee.service";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";

import EmployeeTableEntry from "../components/EmployeeTableEntry";

function Employees() {
  const [employees, setEmployees] = React.useState<any[]>([]);

  const getAllEmployees = () => {
    EmployeeService.getEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    getAllEmployees();
  }, []);

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
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <EmployeeTableEntry
                      key={employee.id}
                      id={employee.id}
                      firstName={employee.firstName}
                      lastName={employee.lastName}
                      email={employee.email}
                      role={employee.role}
                    />
                  ))}
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
