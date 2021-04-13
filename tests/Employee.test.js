//const { test, expect } = require("@jest/globals");
const { expect, test } = require("@jest/globals");
const Employee = require("../lib/employee.js");

test('logs proper name when called', () => {
    employee = new Employee("Trey")
    expect(employee.getName()).toBe("Trey")
})

test('logs proper id when called', () => {
    employee = new Employee("Trey", "101")
    expect(employee.getId()).toBe("101")
})

test('logs proper email when called', () => {
    employee = new Employee("Trey", "101", "Example@gmail.com")
    expect(employee.getEmail()).toBe("Example@gmail.com")
})

test('logs proper position when called', () => {
    employee = new Employee("Trey", "101", "", "Clerk")
    expect(employee.getPosition()).toBe("Clerk")
})

