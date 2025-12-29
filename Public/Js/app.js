class User {
    constructor(name, email, age, password) {
        this.n = name;
        this.e = email;
        this.a = age;
        this.p = password;
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
    if (age < 100 && age > 0 && /[0-9]/.test(age)) {

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

function check() {
    let check = prompt("enter your email:");
    let i = database.findIndex(e => { e.e == check })
    if (i != 0) {
        alert("your email is found")
        check = prompt("enter the password:")
        if (check == database[i].p) {
            alert("your password is right.")
            return true
        }
        else {
            alert("your password is not right.")

        }
    }
    else {
        alert("you email is not right");
        check();
    }
}

function changPassword() {
    let email = prompt("enter the email:");
    let i = database.findIndex(e =>   e.e == email )
    if (i != -1) {
        alert("your email is right");

        database[i].p = Cpassword(prompt("enter a password:").trim());
        alert("change the password is scucces.");
    }
}
let stats = true
while (stats) {
    let menu = prompt("choice the own:\n1-do you want to sing up (type sing up).\n2-do you want to (type the log in)\n3- do you want to change the password (type 3)\n4- if you want to exit (type exit): ").toLowerCase().trim();
    let listMenu = ["sing up", "log in", "3", "exit"]

    if (listMenu.includes(menu)) {
        alert("good")
        if (menu == "sing up") {
            let user = new User(singUpN(), singUpEmail(), singUpAg(), singUpPassword());
            database.push(user);
            console.log(database);
        }
        else if (menu == "log in") {
            check();
        }
        else if (menu == "3") {
            changPassword();
            console.log(database);
            stats = false;
        }
    }
    else {
        alert("can you enter the own choice in the menu.")
    }

}























