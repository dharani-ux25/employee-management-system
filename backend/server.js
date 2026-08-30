const express = require("express");

const cors = require("cors");

require("dotenv").config();


const employeeRoutes =
  require("./routes/employeeRoutes");


const app = express();


// ==========================================
// MIDDLEWARE
// ==========================================


// Allow frontend to communicate with backend

app.use(cors());


// Allow Express to read JSON data

app.use(express.json());


// ==========================================
// ROUTES
// ==========================================


// Test API

app.get("/", (req, res) => {

  res.send(
    "Employee Management System API is Running"
  );

});


// Employee routes

app.use(
  "/api/employees",
  employeeRoutes
);


// ==========================================
// SERVER
// ==========================================


const PORT =
  process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(
    `Server running on http://localhost:${PORT}`
  );

});