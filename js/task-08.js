const form = document.querySelector(".login-form");
form.addEventListner("submit", event => {
event.preventDefault();

const userData = {};

form.elements.forEach(element => {
    if(element.type !== "submit"){
        userData[element.name] = element.value;
        };
    if(!userData.email || !userData.password){
        alert("всі поля повинні бути заповнені.");
        return;
        };
});

console.log(userData);
form.reset();
});