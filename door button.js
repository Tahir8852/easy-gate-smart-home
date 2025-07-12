document.getElementById("doorButton").addEventListener("click", function() {
    if (this.classList.contains("open-right")) {
        this.classList.remove("open-right");
        this.classList.add("open-left");
    } else {
        this.classList.remove("open-left");
        this.classList.add("open-right");
    }
});
