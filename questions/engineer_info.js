//engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

const inquirer = require("inquirer");
const engineer = require('../classes/Engineer');

async function questions_for_engineer() {
  return await inquirer.prompt
  ([
    {
      name: 'name',
      message: `engineer's name`,
      type: 'input',
    },
    {
      name: 'id',
      message: `engineer's id`,
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
      my_engineer = new engineer(val.name, val.id, val.email, val.gh_username);
      return my_engineer;
    }
  ).catch(e => console.log(e));
};

module.exports = { questions_for_engineer };