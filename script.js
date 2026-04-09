// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");

    if (name === "" || email === "") {
        error.textContent = "All fields are required!";
        return;
    }

    if (!email.includes("@")) {
        error.textContent = "Enter a valid email!";
        return;
    }

    error.style.color = "green";
    error.textContent = "Form submitted successfully!";
});


// TO-DO LIST FUNCTION
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;

    let btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.onclick = function() {
        li.remove();
    };

    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}