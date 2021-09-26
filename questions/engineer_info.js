//engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

const inquirer = require("inquirer");
const addAMember = require('../addAMember');

async function questions_for_engineer() {
  await inquirer.prompt
  ([
    {
      name: 'name',
      message: `engineer's name`,
      type: 'input',
    },
    {
      name: 'email',
      message: `engineer's email`,
      type: 'input',
    },
    {
      name: 'gh_username',
      message: `engineer's GitHub username`,
      type: 'input',
    },
  ]).then(
    (val) => {
      console.log(val);
    }
  ).catch(e => console.log(e));
};

module.exports = { questions_for_engineer };