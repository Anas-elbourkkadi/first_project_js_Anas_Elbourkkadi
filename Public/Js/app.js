//  Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
//     + If the user only writes "exit," they exit the current process, and the choice question is asked again.
//         * If the user chooses to sign up, here are the details they must enter:
//             # Name (Full):
//             - Check for leading or trailing spaces.
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.
class User {
    constructor(name, email, age, password){
        this.n=name;
        this.e=email;
        this.a=age;
        this.p=password;
     }
}

let database=[]



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
        if (password.split('').some(e => {return car.includes(e) })) {
            alert("your password is good.")
            let Cpassword= prompt("confirme the password:");
            if(Cpassword==password){
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



let menu = prompt("choice the own:\n1-do you want to sing up (type sing up).\n2-do you want to (login type the log in)\n3- do you want to change the password (type 3)\n4- if you want to exit (type exit): ").toLowerCase().trim();
let listMenu = ["sing up", "log in", "3", "exit"]

if (listMenu.includes(menu)) {
    alert("good")
    if (menu == "sing up") {
       let user= new User(singUpN(),singUpEmail(),singUpAg(),singUpPassword());
       database.push(user);
       console.log(database);
    }
}
else {
    alert("can you enter the own choice in the menu.")
}





















