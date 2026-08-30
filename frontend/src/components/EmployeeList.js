const EmployeeList = ({
  employees,
  onEdit,
  onDelete,
}) => {

  if (employees.length === 0) {

    return (
      <h3>
        No employees found
      </h3>
    );

  }


  return (

    <table>

      <thead>

        <tr>

          <th>Name</th>

          <th>Email</th>

          <th>Department</th>

          <th>Role</th>

          <th>Phone</th>

          <th>Actions</th>

        </tr>

      </thead>


      <tbody>

        {employees.map((employee) => (

          <tr key={employee.id}>

            <td>
              {employee.name}
            </td>

            <td>
              {employee.email}
            </td>

            <td>
              {employee.department}
            </td>

            <td>
              {employee.role}
            </td>

            <td>
              {employee.phone}
            </td>

            <td>

              <button
                onClick={() =>
                  onEdit(employee)
                }
              >
                Edit
              </button>


              <button
                onClick={() =>
                  onDelete(employee.id)
                }
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
};

export default EmployeeList;