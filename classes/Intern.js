employee = require('./Employee')

class Intern extends employee {
  constructor (name, id, email, school){
    super(name, id, email);
    this.school = school;
  }

  static get getSchool() {
    return this.school;
  }

  get getRole(){
    return 'Intern';
  }
}

module.exports = Intern;