const employee = require('../classes/Employee');
const intern = require('../classes/Intern');

describe('Check if Intern class is a Instance of Employee class', () => {

  it('Check Intern class return Intern with getRole function', () => {
    const myIntern = new intern();
    const { getRole } = myIntern;

    expect(getRole()).toBe('Intern');
  });

  it('Check Intern class has email and school', () => {
    const myIntern2 = new intern('employeeName', '1', 'employee@gmail.com', 'tec_monterrey');

    expect(myIntern2.school).toBe('tec_monterrey');

    expect(myIntern2.email).toBe('employee@gmail.com');
  });
});
