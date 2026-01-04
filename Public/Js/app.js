class Acount {
    static dataBase = [];
    constructor() {
        this.n = "";
        this.e = "";
        this.a = 0;
        this.p = "";
        this.BA = 0;
    }
    setFullName() {
        let askUser = prompt("enter your full name:")?.trim()?.split(' ')?.map(e => e.charAt(0)?.toUpperCase() + e.slice(1)?.toLowerCase())?.join(' ');
        while (askUser.length <= 5 || !/^[A-Za-z ]+$/.test(askUser) || askUser == null) {
            alert("your name is not good");
            askUser = prompt("enter your full name:")?.trim()?.split(' ')?.map(e => e.charAt(0)?.toUpperCase() + e.slice(1)?.toLowerCase())?.join(' ');

        }
        alert(`your name ${askUser} is  good`);
        this.n = askUser;
        this.setEmail();
    }
    checkEmail(n) {
        return Acount.dataBase.findIndex(e => e.e === n);
    }
    setEmail() {
        let askEamil = prompt("eneter your email:")?.trim()?.toLowerCase();
        while (askEamil.length < 10 || / /.test(askEamil) || askEamil == null || !/^[^@]*@[^@]*$/.test(askEamil) || this.checkEmail(askEamil) != -1) {
            console.log(this.checkEmail(askEamil));
            alert("your email is not correct, try again.");
            askEamil = prompt("eneter your email:")?.trim()?.toLowerCase();

        }
        this.e = askEamil;
        alert(`added your ${this.e} seucces`);
        this.setAge();

    }
    setAge() {
        let askAge = prompt("enter your age:")?.trim();
        while (/\s/.test(askAge) || !/^[0-9]+$/.test(askAge) || parseInt(askAge) < 18 || parseInt(askAge) >= 100 || askAge == null) {
            alert("your input is not right");
            askAge = prompt("enter your age:").trim();
        }
        this.a = parseInt(askAge);
        alert(`added your age ${this.a} suescss`);
        let v = this.setPassword()
        if (v != false) {
            this.p = v;
        }
    }
    setPassword() {
        let askPassword = prompt("Enter your password:")?.trim();
        while (
            askPassword.length < 7 ||
            /\s/.test(askPassword) ||
            askPassword == undefined ||
            !/[#@+\-*\/]/.test(askPassword) ||
            askPassword == null
        ) {
            alert('your password is not right.');
            askPassword = prompt("Enter your password:").trim();

        }
        let confirmPass = prompt("Confirm the password :");
        if (confirmPass === askPassword) {
            alert("confirme password is scucess.");
            return askPassword;

        }
        else {
            alert("your password is not confirme.");
            return false
        }

    }
    addedData() {
        if ([this.p, this.a, this.e, this.n].includes(undefined) || [this.n, this.a, this.e, this.p].includes(null) || [this.n, this.a, this.e, this.p].includes('')) {
            alert("we didn't added your info,retrun sing up");
        }
        else {
            Acount.dataBase.push(this);
            alert(`added your info is sccues Mr ${this.n} `)
        }
    }
    resultChnge() {
        let askEamil = prompt("enetr your email");
        let i = this.checkEmail(askEamil);
        while (i == -1) {
            alert('your email is not found in database.');
            askEamil = prompt("enetr your email");
            i = this.checkEmail(askEamil);
        }
        let v = this.setPassword();
        if (v != false) {
            Acount.dataBase[i].p = v;
            alert(`change your password scucss and now this is youe email:${Acount.dataBase[i].e} \nyour password:${Acount.dataBase[i].p}`)
        }
    }
    login() {
        let email = prompt("eneter your email:")?.trim()?.toLowerCase();
        let call = this.checkEmail(email)
        while (call == -1 || email === undefined || email === null) {
            alert('your email is not correct');
            email = prompt("eneter your email:")?.trim()?.toLowerCase();
            call = this.checkEmail(email);

        }
        let password = prompt("enter the password:")?.trim();
        if (Acount.dataBase[call].p === password){
            alert(`this your account\n${Acount.dataBase[call].BA}DH.`);

        }
        else{
            alert('your passwoed is not correct.')
        }
    }

}
let user = new Acount();

function scondeMenu(){
    let m=prompt("")
}
while (true) {
    let ask = prompt("1-do you want to sing up (type 1):\n2-do you want to log in (type 2):\n3-do you want to change passworde (type 3):\n4-do you want to exit (type exit):")?.toLowerCase()
    if (['1', '2', '3', 'exit'].includes(ask)) {
        if (ask == 1) {
            user.setFullName();
            user.addedData();
            console.log(Acount.dataBase);
        }
        else if (ask == 2) {
            user.login();
        }
        else if (ask == 3) {
            user.resultChnge();
        }
        else if (ask == "exit") {
            break
        }
    }
    else {
        alert('your choce is not found in the menu.');
    }
}