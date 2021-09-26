//intern’s name, ID, email, and school
const inquirer = require("inquirer-promise");

function questions_for_intern() {
  inquirer.prompt
  ([
    {
      name: 'name',
      message: `intern's name`,
      type: 'input',
    },
    {
      name: 'id',
      message: `intern's id`,
      type: 'input',
    },
    {
      name: 'school',
      message: `school`,
      type: 'input',
    },
  ]).then(
    (val) => {return val}
  );
};

module.exports = { questions_for_intern };