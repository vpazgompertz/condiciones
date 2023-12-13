function checkPassword(){
 const selectA = document.getElementById("select-a").value
 const selectB = document.getElementById("select-b").value
 const selectC = document.getElementById("select-c").value
 const message = document.getElementById("messageTotal")

 const password = selectA + selectB + selectC

    if (password == "911") {
        message.innerHTML = "Password 1 correcto";
    } else if (password == "714") {
        message.innerHTML = "Password 2 es correcto";
    } else {
        message.innerHTML = "Password incorrecto";
    }
}
