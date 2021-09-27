const employee = require('./Employee')

class Intern extends employee {
  constructor (name, id, email, school){
    super(name, id, email);
    this.school = school;
  }

  getSchool = function() {
    return this.school;
  }

  getRole = function() {
    return 'Intern';
  }
}

module.exports = Intern;
module.exports.getRole = Intern.getRole;
module.exports.getSchool = Intern.getSchool;
