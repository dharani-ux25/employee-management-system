import {
  useState,
  useEffect
} from "react";

import "./App.css";

import Dashboard from "./components/Dashboard";

import EmployeeForm from "./components/EmployeeForm";

import EmployeeList from "./components/EmployeeList";

import SearchBar from "./components/SearchBar";

import DepartmentFilter from "./components/DepartmentFilter";


import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "./services/employeeService";


function App() {

  const [employees, setEmployees] =
    useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [
    selectedDepartment,
    setSelectedDepartment
  ] = useState("");

  const [
    selectedEmployee,
    setSelectedEmployee
  ] = useState(null);


  const fetchEmployees = async () => {

    try {

      const response =
        await getEmployees();

      setEmployees(response.data);

    } catch (error) {

      console.error(
        "Error fetching employees:",
        error
      );

    }

  };


  useEffect(() => {

    fetchEmployees();

  }, []);


  const handleSubmit =
    async (employee) => {

      try {

        if (selectedEmployee) {

          await updateEmployee(
            selectedEmployee.id,
            employee
          );

        } else {

          await createEmployee(
            employee
          );

        }

        fetchEmployees();

      } catch (error) {

        console.error(
          "Error saving employee:",
          error
        );

      }

    };


  const handleEdit = (employee) => {

    setSelectedEmployee(employee);

  };


  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Are you sure you want to delete this employee?"
        );


      if (!confirmDelete) {
        return;
      }


      try {

        await deleteEmployee(id);

        fetchEmployees();

      } catch (error) {

        console.error(
          "Error deleting employee:",
          error
        );

      }

    };


  const filteredEmployees =
    employees.filter((employee) => {

      const search =
        searchTerm.toLowerCase();


      const matchesSearch =

        employee.name
          .toLowerCase()
          .includes(search)

        ||

        employee.email
          .toLowerCase()
          .includes(search)

        ||

        employee.department
          .toLowerCase()
          .includes(search);


      const matchesDepartment =

        selectedDepartment === ""

        ||

        employee.department ===
        selectedDepartment;


      return (
        matchesSearch &&
        matchesDepartment
      );

    });


  return (

    <div className="container">

      <div className="header">

  <div>
    <h1> Employee Management System</h1>

    <p>
      Manage your employees easily and efficiently
    </p>
  </div>

</div>


      <Dashboard
        employees={employees}
      />


      <EmployeeForm
        onSubmit={handleSubmit}
        selectedEmployee={
          selectedEmployee
        }
        setSelectedEmployee={
          setSelectedEmployee
        }
      />


      <div className="filters">

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={
            setSearchTerm
          }
        />


        <DepartmentFilter
          employees={employees}
          selectedDepartment={
            selectedDepartment
          }
          setSelectedDepartment={
            setSelectedDepartment
          }
        />

      </div>


      <EmployeeList
        employees={
          filteredEmployees
        }
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>

  );
}

export default App;