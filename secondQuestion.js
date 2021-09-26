const inquirer = require("inquirer");
// engineer or an intern or to finish building my team
function addAMember(){
  inquirer.prompt(
    {
      type:'list',
      name: 'choice',
      message: 'Which member do you want to add?',
      choices : ['engineer', 'intern', 'finish']
    },
  ).then(val => console.log(val));
}

module.exports = {addAMember};