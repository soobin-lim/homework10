ManagerInfo = require('./questions/ManagerInfo');
addAMember = require('./addAMember');
var manager_info;
var engineers_array = [];
var interns_array = [];

async function init() {
  this.manager_info = await ManagerInfo.ManagerInfo();  // First Question about Team Manager
  await add_Members(engineers_array, interns_array);
}

async function add_Members(engineers_array, interns_array) {
  whoisit = await addAMember.addAMember();      // Second and continuing question to add member(s)

  await insert_into_array(whoisit, engineers_array, interns_array);
  while (whoisit !== 'finish') {
    whoisit = await addAMember.addAMember();
    if (whoisit == 'finish') {
      break;
    } else {
      insert_into_array(whoisit, engineers_array, interns_array)
    };
  }
  if (whoisit == 'finish') {
    console.log(engineers_array);
    console.log(interns_array);
    return;
  }

}

async function insert_into_array(whoisit, engineers_array, interns_array) {
  try {
    if (whoisit.getRole == 'Intern') {
      interns_array.push(whoisit);
    } else if (whoisit.getRole == 'Engineer') {
      engineers_array.push(whoisit);
    }
  } catch (err) {
    console.log(err);
  }

}

init();
