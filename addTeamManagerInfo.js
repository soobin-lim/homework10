const inquirer = require("inquirer");

function whoAdd() { //WHEN I enter the team manager’s name, employee ID, email address, and office number
  inquirer.prompt
    ([
      {
        type: "input",
        name: "tm_name",
        message: "team manager’s name"
      },
      {
        type: "input",
        name: "employee_id",
        message: "employee ID"
      },
      {
        type: "input",
        name: "email_address",
        message: "email address"
      },
      {
        type: "input",
        name: "office_number",
        message: "office number"
      },
    ]).then((val) => { 
      console.log(val)
     }
    );
};

module.exports = { whoAdd };