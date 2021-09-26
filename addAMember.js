const inquirer = require("inquirer");
const questions_for_engineer = require('./questions/engineer_info');
const questions_for_intern = require('./questions/intern_info');
const engineer = require('./classes/Engineer');
const intern = require('./classes/Intern');

// engineer or an intern or to finish building my team
async function addAMember() {
  return await inquirer.prompt([    // here return value..
    {
      type: 'list',
      name: 'choice',
      message: 'Which member do you want to add?',
      choices: ['engineer', 'intern', 'finish']
    }],
  ).then(async (val) => {
    if (val.choice == 'finish'){
      return 'finish';
    };
    return await callSecondFunction(val.choice);
  });
}

async function callSecondFunction(choice) {
  let response;
  if (choice == 'engineer') {
    return await questions_for_engineer.questions_for_engineer();
  } else if (choice == 'intern') {
    return await questions_for_intern.questions_for_intern();
  } else if (choice == 'finish') {
    return;
  } else {
    return;
  }
};

module.exports = {addAMember};