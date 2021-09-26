ManagerInfo = require('./questions/ManagerInfo');
addAMember = require('./addAMember');
var manager_info;
var engineers_info;
var interns_info;

async function init() {
  this.manager_info = await ManagerInfo.ManagerInfo();  // First Question about Team Manager
  result  = await addAMember.addAMember();      // Second and continuing question to add member(s)
  console.log(result);
  while(result !== 'finish'){
    result = await addAMember.addAMember();
  }
}

init();