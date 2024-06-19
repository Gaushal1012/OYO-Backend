const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require('./config/connection');
const morgan = require("morgan");

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

//Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("tiny"));
//app.use(require("./index"));

app.listen(5000,()=>{
    console.log("Application listen on port 5000");
})