const validationInput = document.getElementById("validation-input");

 validationInput.addEventListener("blur", () => {
    const expectedLength = parseInt(validationInput.getAttribute("data-length"));
     const inpytLength = validationInput.value.length;

     if (inpytLength === expectedLength) {
         validationInput.classList.add("valid");
         validationInput.classList.remove("invalid");
     } else {
         validationInput.classList.remove("valid");
         validationInput.classList.add("invalid");
     }
});