class User{
    constructor(name, lastname, email, password, country, admin){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.country = country;
        this.country = admin;
    }
}

let users = [
    new User("Camila", "Gonella", "camila@gmail.com", "12345", "Argentina", true),
    new User("Lucía", "Monayer", "lucia@gmail.com", "12345", "Argentina", false),
    new User("Valentina", "Valverde", "valentina@gmail.com", "12345", "Argentina", false),
    new User("Serena", "Miele", "serena@gmail.com", "12345", "Argentina", false),
    new User("Solana", "Stofan", "solana@gmail.com", "12345", "Argentina", false)
];

function loginCheck(event){
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.getElementById("password").value;
   
    let userLogged = users.find(user => user.email == email);
    let passLogged = users.find(user => user.password == password);

    if(userLogged){
        if(passLogged){
            window.location.assign('http://127.0.0.7:5500/pages/main.html')
        } else{
            let passError = document.createElement('div');
            passError.innerText = 'La contraseña es incorrecta';
            passError.classList.add('alert', 'alert-danger', 'mt-3');
            let form = document.querySelector('form');
            form.appendChild(passError);
            setTimeout(function(){
                form.removeChild(passError);
            },5000)
        }
    } else{
        let dataError = document.createElement('div');
            dataError.innerText = 'Los datos ingresados no son correctos';
            dataError.classList.add('alert', 'alert-danger', 'mt-3');
            let form = document.querySelector('form');
            form.appendChild(dataError);
            setTimeout(function(){
                form.removeChild(dataError);
            },5000)
    }
}