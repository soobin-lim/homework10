addTeamManagerInfo = require('./addTeamManagerInfo');
addAMember = require('./addAMember');

async function init() {
  await addTeamManagerInfo.addTeamManagerInfo();
  await addAMember.addAMember();
}

init();