const Intern = require("../lib/intern.js")

test('logs proper name when called', () => {
    intern = new Intern("Trey")
    expect(intern.getName()).toBe("Trey")
})

test('logs proper id when called', () => {
    intern = new Intern("Trey", "101")
    expect(intern.getId()).toBe("101")
})

test('logs proper email when called', () => {
    intern = new Intern("Trey", "101", "Example@gmail.com")
    expect(intern.getEmail()).toBe("Example@gmail.com")
})

test('logs proper position when called', () => {
    intern = new Intern()
    expect(intern.getPosition()).toBe("Intern")
})

test('logs school when called', () => {
    intern = new Intern("Trey", "101", "Example@gmail.com", "UW")
    expect(intern.getSchool()).toBe("UW")
})