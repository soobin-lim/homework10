const inquirer = require("inquirer");
const engineer_info = require('./questions/engineer_info');
const intern_info = require('./questions/intern_info');

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
    } else {
      return await callSecondFunction(val.choice);
    };
  });
}

async function callSecondFunction(choice) {
  if (choice == 'engineer') {
    return await engineer_info.questions_for_engineer();
  } else if (choice == 'intern') {
    return await intern_info.intern_inquirer_prompt();
  } else if (choice == 'finish') {
    return;
  } else {
    return;
  }
};

module.exports = {addAMember};