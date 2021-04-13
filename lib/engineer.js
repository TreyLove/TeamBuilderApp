Employee = require("./employee.js")

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
        this.position = 'Engineer';
    }
    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer