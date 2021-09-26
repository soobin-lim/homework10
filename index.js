const { PassThrough } = require('stream');

addTeamManagerInfo = require('./questions/ManagerInfo');
addAMember = require('./addAMember');

async function init() {
  await addTeamManagerInfo.ManagerInfo();  // First Question about Team Manager
  var result = await addAMember.addAMember();      // Second and continuing question to add member(s)
  
  while(result !== 'finish'){
    result = await addAMember.addAMember();
  }
}

init();