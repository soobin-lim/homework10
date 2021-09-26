const inquirer = require("inquirer");
const questions_for_engineer = require('./questions/engineer_info');
const questions_for_intern = require('./questions/intern_info');
const employee = require('./classes/Employee');
const engineer = require('./classes/Engineer');
const intern = require('./classes/Intern');
const manager = require('./classes/Manager');

// engineer or an intern or to finish building my team
async function addAMember() {
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Which member do you want to add?',
      choices: ['engineer', 'intern', 'finish']
    }],
  ).then(async (val) => {
    console.log(val.choice);
    if (val.choice == 'finish'){
      return 'finish';
    };
    await callSecondFunction(val.choice);
  });
}

async function callSecondFunction(choice) {
  if (choice == 'engineer') {
    await questions_for_engineer.questions_for_engineer();
  } else if (choice == 'intern') {
    await questions_for_intern.questions_for_intern();
  } else if (choice == 'finish') {
    console.log('finish was not recognized in line 16 error');
    return;
  } else {
    console.log('not in the list error');
    return;
  }
};

module.exports = {addAMember};