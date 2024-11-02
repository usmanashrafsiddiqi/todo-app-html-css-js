const inputbox = document.querySelector("#inputbox");
const listitems = document.querySelector(".list-items");

function addtask() {
    if (inputbox.value === "") {
        alert("Add your tasks");
    } else { 
        const li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listitems.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Create cross button
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}

listitems.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Corrected this line
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata() {
    localStorage.setItem("data", listitems.innerHTML);
}

function gettask() {
    listitems.innerHTML = localStorage.getItem("data") || ""; // Ensure it defaults to an empty string
}

// Fetch tasks on page load
gettask();
