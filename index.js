const formSubmitButton = document.getElementById("form-submit-btn");
formSubmitButton.addEventListener("click", doNothingSubmit);

function doNothingSubmit() {
    console.log("Submit Click");
    const passwordValue = document.getElementById("password").value;
    const passwordConfirmValue = document.getElementById("password-confirm").value;

    if (passwordValue !== passwordConfirmValue) {
        console.log(passwordValue, passwordConfirmValue);
        return false;
    }
    return false;
}
