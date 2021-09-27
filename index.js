const ManagerInfo = require('./questions/ManagerInfo');
const addAMember = require('./addAMember');
const generate_html = require('./generatehtml/generate_html');

var engineers_array = [];
var interns_array = [];

async function init() {
  var manager_info = await ManagerInfo.ManagerInfo();  // First Question about Team Manager
  await add_Members(manager_info, engineers_array, interns_array);  // Add Engineer or Intern
}

async function add_Members(manager_info, engineers_array, interns_array) {
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
    generate_html(manager_info, engineers_array, interns_array);
    return;
  }
}

async function insert_into_array(whoisit, engineers_array, interns_array) {
  var whoisit = whoisit;
  if (whoisit.getRole() == 'Intern') {
    interns_array.push(whoisit);
  } else if (whoisit.getRole() == 'Engineer') {
    engineers_array.push(whoisit);
  }
}

init(this.manager_info);
