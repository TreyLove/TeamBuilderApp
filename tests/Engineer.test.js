const Engineer = require("../lib/engineer.js")

test('logs proper name when called', () => {
    engineer = new Engineer("Trey")
    expect(engineer.getName()).toBe("Trey")
})

test('logs proper id when called', () => {
    engineer = new Engineer("Trey", "101")
    expect(engineer.getId()).toBe("101")
})

test('logs proper email when called', () => {
    engineer = new Engineer("Trey", "101", "Example@gmail.com")
    expect(engineer.getEmail()).toBe("Example@gmail.com")
})

test('logs proper position when called', () => {
    engineer = new Engineer()
    expect(engineer.getPosition()).toBe("Engineer")
})

test('logs gitHub when called', () => {
    engineer = new Engineer("Trey", "101", "Example@gmail.com", "gitHub.com/TreyLove")
    expect(engineer.getGitHub()).toBe("gitHub.com/TreyLove")
})