const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
    alert("hi")
    let messages = [];
    if (name.value === '' || name.value == null) {
        messages.push("Name is Required");
    }

    if (password.length <= 6 )  {
        messages.push("Password must be longet than 6th characters");
    }

    if (password.length >= 20 ) {
        messages.push("Password must be less than 20 characters");
    }

    if (password.value === "password") {
        messages.push("Password can't be password");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }    
})