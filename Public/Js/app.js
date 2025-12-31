class User {
    constructor(name, email, age, password) {
        this.n = name;
        this.e = email;
        this.a = age;
        this.p = password;
        this.b = 0;
        this.s = false;
        this.i = false;
        this.loan = 0;
        this.bi = 0
    }
    addedmony() {
        let u = prompt("enter your money:").trim();
        if (!isNaN(u) && /[1-9]/.test(u) && Number(u) >= 1000) {
            this.b += Number(u);
            alert("added your mony is sueccs.");
        }
        else {
            alert("you don't added the mony")
        }
    }
    tflose() {
        let u = prompt("enter your money:").trim();
        if (!isNaN(u) && /[1-9]/.test(u)) {
            if (Number(u) <= this.b) {
                this.b -= Number(u);
                alert("added your mony is sueccs.");
            }
            else {
                alert("you don't have enough mony.");
            }
        }
        else {
            alert("you don't added the mony");
        }
    }
    TakeaLoan() {
        this.loan = this.b * 0.20;
        this.b += this.loan;
        this.s = true;
        alert("take a loan succes");
    }
    invest() {
        let result = (this.bi * 0.20) + this.bi;
        if (result > 0) {
            this.b += (this.bi * 0.20);
            result-=(this.bi*0.20);
        }
    }
}

let database = []



function singUpN() {
    let fullName = prompt("enter your full name").trim().split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(' ');
    if (fullName.length >= 5 && /^[A-Za-z ]+$/.test(fullName)) {
        alert("good");
        return fullName;
    }
    else {
        singUpN();
    }
}
function singUpEmail() {
    let email = prompt("enter the email:").trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.includes(" ") && email.length > 10 && emailRegex.test(email)) {
        alert("good email");
        return email;
    }
    else {
        alert("your email is not good");
        singUpEmail();
    }
}
function singUpAg() {
    let age = prompt("enter your age:").trim();
    if (age < 100 && age >= 18 && /[0-9]/.test(age)) {

        alert("good");
        return Number(age);
    }
    else {
        alert("the age isn't good")
        singUpAg();
    }
}
function singUpPassword() {
    let password = prompt("enter your password:").trim();
    let car = ["@", "#", "-", "+", "*", "/"]
    if (password.length >= 7 && !/\s/.test(password)) {
        if (password.split('').some(e => { return car.includes(e) })) {
            alert("your password is good.")
            let Cpassword = prompt("confirme the password:");
            if (Cpassword == password) {
                return password;
            }
        }
        else {
            alert("your password is not good")
            singUpPassword();
        }
    } else {
        alert("your password is not good")
        singUpPassword();
    }
}

function Cpassword(p) {
    let car = ["@", "#", "-", "+", "*", "/"]
    if (p.length >= 7 && !/\s/.test(p)) {
        if (p.split('').some(e => { return car.includes(e) })) {
            alert("your password is good.")
            let Cpassword = prompt("confirme the password:");
            if (Cpassword == p) {
                return p;
            }
        }
        else {
            alert("your password is not good")
            singUpPassword();
        }
    } else {
        alert("your password is not good")
        singUpPassword();
    }
}

function showAccount(user) {
    if (database[user].s && database[user].loan > 0) {
        database[user].b -= (database[user].loan * 0.10);
        database[user].loan -= (database[user].loan * 0.10);
        alert(`-${database[user].loan * 0.10}dh from your account`);
    }
    if (database[user].i) {
        database[user].invest()
    }

    if (confirm(`this your account:${database[user].b}Dh`)) {
        while (true) {
            let scondeMenu = prompt('1-do you want to enter Withdraw Money (type 1):\n2-do you want to Deposit Money (type 2):\n3-do you want to Take a Loan (type 3):\n4-do you want to invest (type 4):\n5-do you want to see History (type 5):\n6-if want to exit (type 6)');
            if (['1', "2", "3", "4", "5", '6'].includes(scondeMenu)) {
                if (scondeMenu == '1') {
                    database[user].addedmony();
                }
                else if (scondeMenu == 2) {
                    database[user].tflose();
                }
                else if (scondeMenu == '3') {
                    database[user].TakeaLoan();
                }
                else if (scondeMenu == '4') {
                    let invest = parseFloat(prompt("enter the mony do you want to invest:").toLowerCase());
                    while (invest > database[user].b) {
                        invest = parseFloat(prompt("you don't have this badget to invest:").toLowerCase());
                    };
                    database[user].b -= invest
                    database[user].bi += invest;
                    database[user].i = true;
                }
                else {
                    break;
                }

            }
            else {
                alert('this choice is not found in menu.')
            }

        }

    }


}

function logIn() {
    let check = prompt("enter your email:");
    let i = database.findIndex(e => { return e.e == check })
    if (i != -1) {
        alert("your email is found")
        check = prompt("enter the password:")
        if (check == database[i].p) {
            alert("your password is right.")
            showAccount(i);
        }
        else {
            alert("your password is not right.")

        }
    }
    else {
        alert("you email is not right");
        logIn();
    }
}

function changPassword() {
    let email = prompt("enter the email:");
    let i = database.findIndex(e => e.e == email)
    if (i != -1) {
        alert("your email is right");

        database[i].p = Cpassword(prompt("enter a password:").trim());
        alert("change the password is scucces.");
    }
    else {
        alert("your password is not right:");
        changPassword();
    }
}
let stats = true
while (stats) {
    let menu = prompt("choice the own:\n1-do you want to sing up (type sing up).\n2-do you want to (type the log in)\n3- do you want to change the password (type 3)\n4- if you want to exit (type exit): ").toLowerCase().trim();
    let listMenu = ["sing up", "log in", "3", "exit"]

    if (listMenu.includes(menu)) {
        if (menu == "sing up") {
            let user = new User(singUpN(), singUpEmail(), singUpAg(), singUpPassword());
            database.push(user);
            console.log(database);
        }
        else if (menu == "log in") {
            logIn();
        }
        else if (menu == "3") {
            changPassword();
            console.log(database);
        }
        else if (menu == "exit") {
            stats = false;
        }
    }
    else {
        alert("can you enter the own choice in the menu.");
    }

}























