const inquirer = require("inquirer");
const questions_for_engineer = require('./questions/engineer_info');
const questions_for_intern = require('./questions/intern_info');

// engineer or an intern or to finish building my team
async function addAMember() {
  await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Which member do you want to add?',
      choices: ['engineer', 'intern', 'finish']
    }],
  ).then(async (val) => {
    await callSecondFunction(val.choice);
  });
}

async function callSecondFunction(choice) {
  if (choice == 'engineer') {
    await questions_for_engineer.questions_for_engineer();
  } else if (choice == 'intern') {
    await questions_for_intern.questions_for_intern();
  } else if (choice == 'finish') {
    console.log('finish');
    return;
  } else {
    console.log('not in the list error');
    return;
  }
};

module.exports = {addAMember};