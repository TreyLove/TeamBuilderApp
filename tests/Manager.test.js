const Manager = require("../lib/manager.js")

test('logs proper name when called', () => {
    manager = new Manager("Trey")
    expect(manager.getName()).toBe("Trey")
})

test('logs proper id when called', () => {
    manager = new Manager("Trey", "101")
    expect(manager.getId()).toBe("101")
})

test('logs proper email when called', () => {
    manager = new Manager("Trey", "101", "Example@gmail.com")
    expect(manager.getEmail()).toBe("Example@gmail.com")
})

test('logs proper position when called', () => {
    manager = new Manager()
    expect(manager.getPosition()).toBe("Manager")
})

test('logs office number when called', () => {
    manager = new Manager("Trey", "101", "Example@gmail.com", "202")
    expect(manager.getOffice()).toBe("202")
})