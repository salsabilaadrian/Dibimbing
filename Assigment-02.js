const rl = require('readline-sync')
let email = []
let password = []

function check_email(s) {
    for (let i = 0; i < email.length; i++) {
        if (email1 == email[i]) {
            check_password(true)
            return true
        } else {
            check_password(false)
            return false
        }
    }
}

function check_password(s) {
    for (let i = 0; i < password.length; i++) {
        if (password1 == password[i] && check_email == true) {
            check_true(true)
            return true
        } else {
            check_false(false)
            return false
        }
    }
}

function login(s) {
    email1 = rl.question('Input Email: ')
    password1 = rl.question('Input Password: ')
    if (email == 0) {
        console.log("You Must Register First !!!")
        let register
        let back
        while (back != "yes") {
            register = rl.question('Do You Want to Register [yes / no] ? ')
            if (register == "yes") {
                regis("yes")
            } else {
                console.log("You Must Have an Account to Login !!!")
                back = rl.question("You Want to Back [yes / no] ? ")
            }
        }

    } else {
        check_email(email1)
    }

    console.log("History Account Login: ")
    for (let i = 0; i < email.length; i++) {
        console.log(email[i])
    }
}

function check_true(s) {
    console.log("You're Login to System !!!")
}

function check_false(s) {
    if (check_password == false) {
        console.log("You're Email or Password is Wrong !!!")
        login(false)
    } else {
        let forgot_password = rl.question('Forgot Password [yes / no] ? ')
        if (forgot_password == "yes") {
            email1 = rl.question('Input Email: ')
            for (let i = 0; i < email.length; i++) {
                if (email1 == email[i]) {
                    console.log("Verification Code has been sent!!!")
                    let x = Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1);
                    console.log(x)
                    let verification_code = rl.question('Input Verification Code: ')
                    if (verification_code == x) {
                        let new_password = rl.question('Input New Password: ')
                        let verif_new_password = rl.question('Input Verification New Password: ')
                        if (new_password == verif_new_password) {
                            password.forEach((verif_new_password, index) => {
                                verif_new_password = password[index];
                                console.log(password)
                            });
                            console.log("Success Reset Your Password!!!")
                            let login_back = rl.question('Do You Want to Login [yes / no] ? ')
                            if (login_back == "yes") {
                                login("yes")
                            } else {
                                console.log("Your Password has been reset!!!")
                            }
                        }
                    } else {
                        console.log("EMAIL BEDA")
                        return email1 = false
                    }

                }
            }
        } else if (forgot_password == "no") {
            login("no")
        }
    }
}


function regis(s) {
    email2 = rl.question('Input Email: ')
    email.push(email2)
    password2 = rl.question('Input Password: ')
    password.push(password2)
    let login_back = rl.question('Do You Want to Login [yes / no] ? ')
    if (login_back == "yes") {
        login("yes")
    } else {
        console.log("You're Not Login")
    }
}

if (email != 0) {
    for (let i = 0; i < email.length; i++) {
        console.log(email[i])
    }
}

if (password != 0) {
    for (let i = 0; i < password.length; i++) {
        console.log(password[i])
    }
}

let acc = rl.question('Do You Have an Account [yes / no] ? ')
if (acc == "yes") {
    login("yes")
} else {
    regis("no")
}