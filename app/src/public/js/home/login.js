const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#Btn");

loginBtn.addEventListener("click", login);
function login() {
    const req = {
        id: id.value,
        psword: psword.value
    };
    console.log(req);
}