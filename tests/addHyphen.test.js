const addHyphen = require('../utils').addHyphen

test('replaces " " with "-" in a string', () =>{
  expect(addHyphen("3058 Spuraway Avenue")).toBe("3058-Spuraway-Avenue");
});

