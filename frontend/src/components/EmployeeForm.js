import {
  useState,
  useEffect
} from "react";


const EmployeeForm = ({
  onSubmit,
  selectedEmployee,
  setSelectedEmployee,
}) => {

  const initialState = {
    name: "",
    email: "",
    phone: "",
    department: "",
    role: "",
    salary: "",
    joiningDate: "",
  };


  const [formData, setFormData] =
    useState(initialState);

  const [error, setError] =
    useState("");


  useEffect(() => {

    if (selectedEmployee) {

      setFormData({
        name:
          selectedEmployee.name || "",

        email:
          selectedEmployee.email || "",

        phone:
          selectedEmployee.phone || "",

        department:
          selectedEmployee.department || "",

        role:
          selectedEmployee.role || "",

        salary:
          selectedEmployee.salary || "",

        joiningDate:
          selectedEmployee.joining_date
            ? selectedEmployee.joining_date.split("T")[0]
            : "",
      });

    }

  }, [selectedEmployee]);


  const handleChange = (event) => {

    setFormData({
      ...formData,

      [event.target.name]:
        event.target.value,
    });

  };


  const handleSubmit = (event) => {

    event.preventDefault();


    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.department ||
      !formData.salary ||
      !formData.joiningDate
    ) {

      setError(
        "Please fill all required fields"
      );

      return;
    }


    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailRegex.test(formData.email)) {

      setError(
        "Please enter a valid email"
      );

      return;
    }


    if (isNaN(formData.salary)) {

      setError(
        "Salary must be a number"
      );

      return;
    }


    setError("");

    onSubmit(formData);

    setFormData(initialState);

    setSelectedEmployee(null);

  };


  return (

    <div className="form-container">

      <h2>

        {selectedEmployee
          ? "Edit Employee"
          : "Add Employee"}

      </h2>


      {error && (

        <p className="error">
          {error}
        </p>

      )}


      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={formData.name}
          onChange={handleChange}
        />


        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />


        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />


        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
        />


        <input
          type="text"
          name="role"
          placeholder="Job Role"
          value={formData.role}
          onChange={handleChange}
        />


        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
        />


        <input
          type="date"
          name="joiningDate"
          value={formData.joiningDate}
          onChange={handleChange}
        />


        <button type="submit">

          {selectedEmployee
            ? "Update Employee"
            : "Add Employee"}

        </button>

      </form>

    </div>
  );
};

export default EmployeeForm;