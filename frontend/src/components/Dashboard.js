const Dashboard = ({ employees }) => {

  const totalEmployees = employees.length;

  const departments = [
    ...new Set(
      employees.map((employee) => employee.department)
    ),
  ];

  const totalDepartments = departments.length;

  const averageSalary =
    employees.length > 0
      ? employees.reduce(
          (total, employee) =>
            total + Number(employee.salary),
          0
        ) / employees.length
      : 0;

  return (
    <div className="dashboard">

      <div className="card">
        <h3>Total Employees</h3>
        <h2>{totalEmployees}</h2>
      </div>

      <div className="card">
        <h3>Total Departments</h3>
        <h2>{totalDepartments}</h2>
      </div>

      <div className="card">
        <h3>Average Salary</h3>
        <h2>
          ₹ {averageSalary.toFixed(2)}
        </h2>
      </div>

    </div>
  );
};

export default Dashboard;