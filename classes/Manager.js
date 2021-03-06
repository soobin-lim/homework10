const employee = require('./Employee')

class Manager extends employee {
  constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
  };

  getRole = function(){
    return 'Manager';
  };
}

module.exports = Manager;
module.exports.getRole = Manager.getRole;