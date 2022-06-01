let emailInputField = document.getElementsByClassName("email-input")[0]
let invalidEmailParagraph = document.getElementsByClassName("invalid-email-paragraph")[0]
let errorIcon = document.getElementById("errorIcon")

function formatEmailCheck(){
    if(emailInputField.value == "" || emailInputField.value.includes("@") == false){
        invalidEmailParagraph.style.opacity = 1
        errorIcon.style.opacity = 1
        emailInputField.style.borderColor = "var(--Soft-Red)"
        emailInputField.style.outlineColor = "var(--Soft-Red)"
    }
}