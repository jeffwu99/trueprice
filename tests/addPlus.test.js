const addPlus = require('../utils').addPlus
//test that I can change things. - Remy
//yay its working - remy
test('replaces " " with "+" in a string', () =>{
  expect(addPlus("3058 Spuraway Avenue")).toBe("3058+Spuraway+Avenue");
});


test('replaces " " with "+" in a string', () =>{
  expect(addPlus("")).toBe("");
});