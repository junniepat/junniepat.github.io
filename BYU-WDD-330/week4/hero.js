const form = document.forms["hero"];

//event handlers
form.heroName.addEventListener("keyup", disableSubmit, false);
form.addEventListener("submit", validate, false);
form.addEventListener('submit', makeHero, false);


//validation through button
function disableSubmit(event){
    if(event.target.value === "") {
        document.getElementById("submit").disabled = true;
    } else {
        document.getElementById("submit").disabled = false;
    }
}

//validation adding to html
const label = form.querySelector("label");
const error = document.createElement("div");
error.classList.add("error");
error.textContent = "! Your name is not allowed to start with X.";
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith("X")){
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
}

//validation using an alert box
function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() == "X"){
        event.preventDefault();
        alert("Your name is not allowed to start with X!");
    }
}

//function to display results in alert box
function makeHero(event) {

    event.preventDefault();

    const hero = {};

    //getting values from form submitted
    hero.name = form.heroName.value;
    hero.realName = form.realName.value;
    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;

    //creates an array
    hero.powers = [];
    //array itterator
    hero.powers = [...form.powers].filter(box => box.checked)
        .map(box => box.value);

    alert(JSON.stringify(hero));

    return hero;
}