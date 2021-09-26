const inquirer = require("inquirer");

function whoAdd() {
  inquirer.prompt
    ([
      {
        type: "input",
        name: "choice",
        message: "Who do you want to add?"
      }
    ]).then(val => console.log(val.choice));
};

module.exports = {whoAdd};