const pool = require("../config/db");


// ==========================================
// ADD EMPLOYEE
// POST /api/employees
// ==========================================

const createEmployee = async (req, res) => {

  try {

    const {
      name,
      email,
      phone,
      department,
      role,
      salary,
      joiningDate
    } = req.body;


    // Required field validation

    if (
      !name ||
      !email ||
      !phone ||
      !department ||
      !role ||
      !salary ||
      !joiningDate
    ) {

      return res.status(400).json({
        message: "All fields are required"
      });

    }


    // Email validation

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailRegex.test(email)) {

      return res.status(400).json({
        message: "Please enter a valid email"
      });

    }


    // Salary validation

    if (isNaN(salary)) {

      return res.status(400).json({
        message: "Salary must be a number"
      });

    }


    // Check duplicate email

    const existingEmployee = await pool.query(
      "SELECT * FROM employees WHERE email = $1",
      [email]
    );


    if (existingEmployee.rows.length > 0) {

      return res.status(400).json({
        message: "Employee with this email already exists"
      });

    }


    // Insert employee

    const result = await pool.query(
      `INSERT INTO employees
      (
        name,
        email,
        phone,
        department,
        role,
        salary,
        joining_date
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [
        name,
        email,
        phone,
        department,
        role,
        salary,
        joiningDate
      ]
    );


    return res.status(201).json({

      message: "Employee created successfully",

      employee: result.rows[0]

    });


  } catch (error) {

    console.error(
      "Create Employee Error:",
      error
    );


    return res.status(500).json({

      message: "Internal Server Error"

    });

  }

};



// ==========================================
// GET ALL EMPLOYEES
// GET /api/employees
// ==========================================

const getEmployees = async (req, res) => {

  try {

    const result = await pool.query(
      `SELECT *
       FROM employees
       ORDER BY id DESC`
    );


    return res.status(200).json(
      result.rows
    );


  } catch (error) {

    console.error(
      "Get Employees Error:",
      error
    );


    return res.status(500).json({

      message: "Internal Server Error"

    });

  }

};



// ==========================================
// GET SINGLE EMPLOYEE
// GET /api/employees/:id
// ==========================================

const getEmployeeById = async (req, res) => {

  try {

    const { id } = req.params;


    const result = await pool.query(

      `SELECT *
       FROM employees
       WHERE id = $1`,

      [id]

    );


    if (result.rows.length === 0) {

      return res.status(404).json({

        message: "Employee not found"

      });

    }


    return res.status(200).json(
      result.rows[0]
    );


  } catch (error) {

    console.error(
      "Get Employee Error:",
      error
    );


    return res.status(500).json({

      message: "Internal Server Error"

    });

  }

};



// ==========================================
// UPDATE EMPLOYEE
// PUT /api/employees/:id
// ==========================================

const updateEmployee = async (req, res) => {

  try {

    const { id } = req.params;


    const {
      name,
      email,
      phone,
      department,
      role,
      salary,
      joiningDate
    } = req.body;


    // Validation

    if (
      !name ||
      !email ||
      !phone ||
      !department ||
      !role ||
      !salary ||
      !joiningDate
    ) {

      return res.status(400).json({

        message: "All fields are required"

      });

    }


    // Check whether employee exists

    const employeeCheck =
      await pool.query(

        "SELECT * FROM employees WHERE id = $1",

        [id]

      );


    if (employeeCheck.rows.length === 0) {

      return res.status(404).json({

        message: "Employee not found"

      });

    }


    // Update employee

    const result = await pool.query(

      `UPDATE employees
       SET
         name = $1,
         email = $2,
         phone = $3,
         department = $4,
         role = $5,
         salary = $6,
         joining_date = $7
       WHERE id = $8
       RETURNING *`,

      [
        name,
        email,
        phone,
        department,
        role,
        salary,
        joiningDate,
        id
      ]

    );


    return res.status(200).json({

      message: "Employee updated successfully",

      employee: result.rows[0]

    });


  } catch (error) {

    console.error(
      "Update Employee Error:",
      error
    );


    // Duplicate email error

    if (error.code === "23505") {

      return res.status(400).json({

        message: "Email already exists"

      });

    }


    return res.status(500).json({

      message: "Internal Server Error"

    });

  }

};



// ==========================================
// DELETE EMPLOYEE
// DELETE /api/employees/:id
// ==========================================

const deleteEmployee = async (req, res) => {

  try {

    const { id } = req.params;


    const result = await pool.query(

      `DELETE FROM employees
       WHERE id = $1
       RETURNING *`,

      [id]

    );


    if (result.rows.length === 0) {

      return res.status(404).json({

        message: "Employee not found"

      });

    }


    return res.status(200).json({

      message: "Employee deleted successfully",

      employee: result.rows[0]

    });


  } catch (error) {

    console.error(
      "Delete Employee Error:",
      error
    );


    return res.status(500).json({

      message: "Internal Server Error"

    });

  }

};



// ==========================================
// EXPORT CONTROLLER FUNCTIONS
// ==========================================

module.exports = {

  createEmployee,

  getEmployees,

  getEmployeeById,

  updateEmployee,

  deleteEmployee

};