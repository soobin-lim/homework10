const inquirer = require("inquirer");
const questions_for_engineer = require('./questions/engineer_info');
// engineer or an intern or to finish building my team
function addAMember() {
  inquirer.prompt(
    {
      type: 'list',
      name: 'choice',
      message: 'Which member do you want to add?',
      choices: ['engineer', 'intern', 'finish']
    },
  ).then((val) => {
    if (val.choice == 'engineer') {
      questions_for_engineer.questions_for_engineer();
      this.addAMember();
    } else if (val.choice == 'intern') {
      return;
    } else if (val.choice == 'finish') {
      return;
    } else {
      return;
    }
  }
  );
}

module.exports = { addAMember };