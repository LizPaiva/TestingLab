const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});



// Pruebas para división y multiplicación
test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide 9 / 3 to equal 3', () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

test('multiply 4 * 5 to equal 20', () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});

test('multiply 7 * 6 to equal 42', () => {
  expect(calculator.multiply(7, 6)).toBe(42);
});


// Tarea 3 Escribir una prueba unitaria para verificar la función divide() pasando 0 como segundo argumento.


test('divide by 0 throws an error', () => {
  expect(() => {
      calculator.divide(10, 0);  
  }).toThrow('Cannot divide by zero');
});

// Corregir la función divide() para que la prueba pase y maneje el caso de la división por 0.

test('divide by 0 throws an error', () => {
  expect(() => {
      calculator.divide(10, 0);  
  }).toThrow('Cannot divide by zero');
});