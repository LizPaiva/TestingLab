const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

beforeEach(() => {
    userController.users = [];  // Limpiamos la lista de usuarios antes de cada prueba
});

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
});

test('remove user from userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
});

// Implementar 1 prueba para la función add() que verifica un usuario que no está en la lista de usuarios..
test('remove a non-existing user does not crash userController', () => {
    let user = new User(5678,"Laura", "laura@generation.org");
    // No agregamos a Laura
    userController.remove(user);
    expect(userController.getUsers()).toHaveLength(0);
});

// PRUEBAS para findByEmail
test('findByEmail finds an existing user', () => {
    let user = new User(1111,"Mateo", "mateo@generation.org");
    userController.add(user);
    expect(userController.findByEmail("mateo@generation.org")).toBe(user);
});

test('findByEmail returns undefined if email does not exist', () => {
    expect(userController.findByEmail("nonexistent@generation.org")).toBeUndefined();
});

// PRUEBAS para findById
test('findById finds an existing user', () => {
    let user = new User(2222,"Valentina", "valentina@generation.org");
    userController.add(user);
    expect(userController.findById(2222)).toBe(user);
});

test('findById returns undefined if id does not exist', () => {
    expect(userController.findById(9999)).toBeUndefined();
});