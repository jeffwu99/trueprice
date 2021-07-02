const capitalizeAddress = require('../utils').capitalizeAddress

test('capitalizes first letter of each WORD', () =>{
  expect(capitalizeAddress("3058 Spuraway Avenue"))
  .toBe("3058 Spuraway Avenue");
});

test('capitalizes first letter of each WORD', () =>{
  expect(capitalizeAddress("3058 spuraway avenue"))
  .toBe("3058 Spuraway Avenue");
});

test('capitalizes first letter of each WORD', () =>{
  expect(capitalizeAddress("3058spuraway avenue"))
  .toBe("3058spuraway Avenue");
});

test('capitalizes first letter of each WORD', () =>{
  expect(capitalizeAddress("s p P aWway 204 2venue 1 avenUeE   "))
  .toBe("S P P AWway 204 2venue 1 AvenUeE   ");
});

test('capitalizes first letter of each WORD', () =>{
  expect(capitalizeAddress("S P P AWway 204 2venue 1 AvenUeE "))
  .toBe("S P P AWway 204 2venue 1 AvenUeE ");
});

test('capitalizes first letter of each WORD', () =>{
  expect(capitalizeAddress("THIS IS ALL 1CAPS FOR4 A 2REASON 1 "))
  .toBe("THIS IS ALL 1CAPS FOR4 A 2REASON 1 ");
});