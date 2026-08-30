const DepartmentFilter = ({
  employees,
  selectedDepartment,
  setSelectedDepartment,
}) => {

  const departments = [
    ...new Set(
      employees.map(
        (employee) => employee.department
      )
    ),
  ];

  return (
    <select
      value={selectedDepartment}
      onChange={(event) =>
        setSelectedDepartment(event.target.value)
      }
    >

      <option value="">
        All Departments
      </option>

      {departments.map((department) => (

        <option
          key={department}
          value={department}
        >
          {department}
        </option>

      ))}

    </select>
  );
};

export default DepartmentFilter;