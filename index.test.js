const { stringLength,reverseString,calculator,capitalize } = require('./index');
const calc = new calculator(5, 5);

//Task 1
test('string length of mustafa ', () => {
    expect(stringLength('mustafa')).toBe(7);
  });

test('string character long between 1 and 10', () => {
  expect(stringLength('mmmmmmmmmmmmmmmmmmmmmmm')).toThrow('character long  not in range');
});

//Task 2
test('reverse String of mustafa ', () => {
    expect(reverseString('mustafa')).toBe('afatsum');
  });

//Task 3 
describe('my calculator', () => {
  test('add number', () => {
    expect(calc.add()).toBe(10);
  });
  test('subtract number', () => {
    expect(calc.subtract()).toBe(0);
  });
  test('divide number', () => {
    expect(calc.divide()).toBe(1);
  });
  test('multiply number', () => {
    expect(calc.multiply()).toBe(25);
  });
});

//Task 4
test('string first character capitalized ', () => {
  expect(capitalize('mustafa')).toBe('Mustafa');
});