employee = require('./Employee')

class Engineer extends employee {
  constructor(name, id, email, gh_username){
    super(name, id, email);
    this.gh_username = gh_username;
  }
  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
module.exports.getRole = Engineer.getRole;
