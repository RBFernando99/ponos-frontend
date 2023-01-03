import React from "react";

import Button from "react-bootstrap/Button";

interface EmployeeTableEntryProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

function EmployeeTableEntry(EmployeeTableEntryProps: EmployeeTableEntryProps) {
  return (
    <tr>
      <td>{EmployeeTableEntryProps.id}</td>
      <td>{EmployeeTableEntryProps.firstName}</td>
      <td>{EmployeeTableEntryProps.lastName}</td>
      <td>{EmployeeTableEntryProps.email}</td>
      <td>{EmployeeTableEntryProps.role}</td>
      <td className="d-flex justify-content-center gap-3">
        <Button variant="primary">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash" />
        </Button>
      </td>
    </tr>
  );
}

export default EmployeeTableEntry;
