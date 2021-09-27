ManagerInfo = require('./questions/ManagerInfo');
addAMember = require('./addAMember');
var manager_info;
var engineers_array = [];
var interns_array = [];

async function init() {
  manager_info = await ManagerInfo.ManagerInfo();  // First Question about Team Manager
  await add_Members(engineers_array, interns_array);  // Add Engineer or Intern
}

async function add_Members(engineers_array, interns_array) {
  var whoisit = await addAMember.addAMember();      // Second and continuing question to add member(s)

  await insert_into_array(whoisit, engineers_array, interns_array);
  while (whoisit !== 'finish') {
    whoisit = await addAMember.addAMember();
    if (whoisit == 'finish') {
      break;
    } else {
      await insert_into_array(whoisit, engineers_array, interns_array)
    };
  }
  if (whoisit == 'finish') {
    console.log(engineers_array);
    console.log(interns_array);
    return;
  }

}

async function insert_into_array(whoisit, engineers_array, interns_array) {
  var whoisit = whoisit;
  console.log('insert into array ', whoisit, engineers_array, interns_array);
  console.log(whoisit.getRole());
  if (whoisit.getRole() == 'Intern') {
    interns_array.push(whoisit);
    console.log(interns_array);
  } else if (whoisit.getRole == 'Engineer') {
    engineers_array.push(whoisit);
    console.log(engineers_array);
  }


}

init();
