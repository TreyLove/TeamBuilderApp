const fs = require("fs")
const inquirer = require('inquirer');

let managerArray = []
let engArray = []
let intArray = []

class Employee {
    constructor(name, id, email, position) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.position = position;


    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getPosition() {
        return this.position
    }
}

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office
        this.position = 'Manager'


    }
    getOffice() {
        return this.office;
    }
}

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

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.position = "Intern";
    }
    getSchool() {
        return this.school;
    }
}

const template = (manager, engineer, intern) => {
    const htmlStart = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
    <div id="card-cont">
    `
    let finTemp = [htmlStart]
    managerArray.forEach(e => {
        let cardTemp = `
       <div class="card">
       <div class="card-head">
           <h2>${e.name}</h2>
           <h2>Manager</h2>
           <img src="../images/manager.png" alt="">
       </div>

       <ul>
           
           <li><b>Email: </b><a href="mailto:${e.email}">${e.email}</a></li>
           <li><b>ID: </b>${e.id}</li>
           <li><b>Office Number: </b>${e.office}</li>
       </ul>

   </div>
       
    `
        finTemp.push(cardTemp)
    });

    engineer.forEach(e => {
        let cardTemp = `
        <div class="card">
        <div class="card-head">
            <h2>${e.name}</h2>
            <h2>Engineer</h2>
            <img src="../images/administrator-developer.png" alt="">
        </div>

        <ul>
            
            <li><b>Email: </b><a href="mailto:${e.email}">${e.email}</a></li>
            <li><b>ID: </b>${e.id}</li>
            <li><b>GitHub Page: </b><a href="${e.gitHub}">${e.gitHub}</a></li>
        </ul>

    </div>`
        finTemp.push(cardTemp)
    });
    intern.forEach(e => {
        let cardTemp = `
        <div class="card">
        <div class="card-head">
            <h2>${e.name}</h2>
            <h2>Intern</h2>
            <img src="../images/education-study.png" alt="">
        </div>

        <ul>
            
            <li><b>Email: </b><a href="mailto:${e.email}">${e.email}</a></li>
            <li><b>ID: </b>${e.id}</li>
            <li><b>School: </b>${e.school}</li>
        </ul>

    </div> `
        finTemp.push(cardTemp)


    });
    let htmlEnd = `
       </div>
    </body>
    
    </html>
    `
    finTemp.push(htmlEnd)
    return finTemp
}
const writeHtml = (tempArray) => {

    tempArray.forEach(e => {
        fs.appendFileSync("./generatedProfile/teamProf.html", e, (error) => {
            console.log(error)

        })
    });

}

const promptMan = async () => {
    return await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of project manager'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Manager employee ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Manager email'
        },
        {
            type: 'input',
            name: 'office',
            message: 'Manager office number'
        },


    ])

};

const promptEng = async () => {
    return await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter name of engineer"
        },
        {
            type: "input",
            name: "id",
            message: " Engineer employee ID"
        },
        {
            type: "input",
            name: "email",
            message: "Engineer email"
        },
        {
            type: "input",
            name: "gitHub",
            message: "Engineer gitHub"
        },

    ])


};

const promptInt = async () => {
    return await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter name of intern"
        },
        {
            type: "input",
            name: "id",
            message: " Intern employee ID"
        },
        {
            type: 'input',
            name: 'email',
            message: 'Intern email'
        },
        {
            type: "input",
            name: "school",
            message: "Intern school"
        },

    ])
};

const promptType = async () => {
    return await inquirer.prompt([
        {
            type: 'list',
            message: 'What is the next position you want to record?',
            name: 'empType',
            choices: ['Engineer', 'Intern', 'Team finished']
        },
    ])
}

init = async () => {

    const manInfo = await promptMan()

    console.log(manInfo)
    manager = new Manager(manInfo.name, manInfo.id, manInfo.email, manInfo.office)
    managerArray.push(manager)
    console.log(manager)


    let boolean = true
    while (boolean === true) {
        const empChoice = await promptType()

        if (empChoice.empType === 'Engineer') {
            const engInfo = await promptEng()
            engineer = new Engineer(engInfo.name, engInfo.id, engInfo.email, engInfo.gitHub)
            //console.log(engineer)
            engArray.push(engineer)
        }

        if (empChoice.empType === 'Intern') {
            const intInfo = await promptInt()
            intern = new Intern(intInfo.name, intInfo.id, intInfo.email, intInfo.school)
            // console.log(intern)
            intArray.push(intern)

        }
        if (empChoice.empType === 'Team finished') {
            boolean = false
        }

    }

    //console.log(manager)
    //console.log(engArray);
    //console.log(intArray);

    const finalTemp = template(managerArray, engArray, intArray)
    //console.log(template(managerArray, engArray, intArray))
    writeHtml(finalTemp)
    console.log('Check in the generatedProfile folder to find your completed team profile')

    return
}
init()
