const inquirer = require("inquirer");

const intern = require('../classes/Intern');
const manager = require('../classes/Manager');

async function ManagerInfo() { //WHEN I enter the team manager’s name, employee ID, email address, and office number
  await inquirer.prompt
    ([
      {
        type: "input",
        name: "name",
        message: "team manager’s name"
      },
      {
        type: "input",
        name: "id",
        message: "employee ID"
      },
      {
        type: "input",
        name: "email",
        message: "email address"
      },
      {
        type: "input",
        name: "office_number",
        message: "office number"
      },
    ]).then((val) => {
      let my_manager = new manager(val.name, val.id, val.email, val.office_number)
      console.log(my_manager);
    }
    );
};

module.exports = { ManagerInfo };