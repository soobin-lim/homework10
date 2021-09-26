//intern’s name, ID, email, and school
const inquirer = require("inquirer-promise");
const addAMember = require('../addAMember');

async function questions_for_intern() {
  await inquirer.prompt
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
    (val) => {
      console.log(val);
    }
  ).catch(e => console.log(e));
};

module.exports = { questions_for_intern };