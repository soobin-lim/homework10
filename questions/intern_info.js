//intern’s name, ID, email, and school
const inquirer = require("inquirer-promise");
const addAMember = require('../addAMember');
const intern = require('../classes/Intern');

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
      name: 'email',
      message: `intern's email`,
      type: 'input',
    },
    {
      name: 'school',
      message: `school`,
      type: 'input',
    },
  ]).then(
    (val) => {
      my_intern = new intern(val.name, val.id, val.email, val.school);
      console.log(my_intern);
    }
  ).catch(e => console.log(e));
};

module.exports = { questions_for_intern };