const Engineer = require('../classes/Engineer');

describe('Engineer class', () => {
  it('Creates an array of Engineer objects', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual(
      'Engineer');

    expect(engineer).toBeInstanceOf(Engineer);
  });
});
