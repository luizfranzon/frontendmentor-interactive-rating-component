const buttons = document.getElementsByClassName("grade-button");
const submit = document.getElementsByClassName("submit")[0];
const container = document.getElementsByClassName("container")[0];
const thankyou = document.getElementsByClassName("container-thankyou")[0];
const noteElement = document.getElementById("noteElement");

function removeSelected() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
    }
}

buttons[0].addEventListener("click", function () {
    removeSelected();
    buttons[0].classList.add("selected");
    submit.removeAttribute("disabled", " ");
    submit.classList.add("selected");
    var note = 1;
    noteElement.innerText = `Você selecionou: ${note} de 5`
});

buttons[1].addEventListener("click", function () {
    removeSelected();
    buttons[1].classList.add("selected");
    submit.removeAttribute("disabled", " ");
    submit.classList.add("selected");
    var note = 2;
    noteElement.innerText = `Você selecionou: ${note} de 5`
});

buttons[2].addEventListener("click", function () {
    removeSelected();
    buttons[2].classList.add("selected");
    submit.removeAttribute("disabled", " ");
    submit.classList.add("selected");
    var note = 3;
    noteElement.innerText = `Você selecionou: ${note} de 5`
});

buttons[3].addEventListener("click", function () {
    removeSelected();
    buttons[3].classList.add("selected");
    submit.removeAttribute("disabled", " ");
    submit.classList.add("selected");
    var note = 4;
    noteElement.innerText = `Você selecionou: ${note} de 5`
});

buttons[4].addEventListener("click", function () {
    removeSelected();
    buttons[4].classList.add("selected");
    submit.removeAttribute("disabled", " ");
    submit.classList.add("selected");
    var note = 5;
    noteElement.innerText = `Você selecionou: ${note} de 5`
});

function ShowThankYou() {
    container.style.display = "none";
    thankyou.style.display = "flex";
}

console.log(noteElement)

submit.addEventListener("click", function(note) {
    ShowThankYou();
})
