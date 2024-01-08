let dropdownMenuActivated = false;
let dropdownButton = document.getElementById("dropdown-button");
let dropdownContent = document.getElementById("dropdown-content");


dropdownButton.addEventListener("click", (event) => {
    dropdownContent.style.display = (dropdownMenuActivated)
        ? "none"
        : "block";

    dropdownMenuActivated = ! dropdownMenuActivated;
});
