const { forEach } = require('../../../01-Activities/28-Stu_Mini-Project/Main/lib/words');
const generate_html = require('../generatehtml/generate_html');

it ('Names are not empty',()=>{
  expect(generate_html.ManagerName !== '' ).toBe(true);
  // expect(generate_html.EngineerNameArray.every((name) => {return name !== ''})).toBe(true);
  // expect(generate_html.InternNameArray.every((name) => {return name !== ''})).toBe(true);
});