const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const userData = {};
    const formData = new FormData(form);
    
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    if (!userData.email || !userData.password) {
        alert("Всі поля повині бути заповнені");
        return;
    }
    console.log(userData);
    form.reset();
});