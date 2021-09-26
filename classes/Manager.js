employee = require('./Employee')

class Manager extends employee {
  constructor(officeNumber){
    this.officeNumber = officeNumber;
  }
  getRole = function(){
    return 'Manager';
  }
}