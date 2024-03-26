document.addEventListener("keydown", function(event) {
 if (/^[a-zA-Z]$/.test(event.key)) {
    var textarea = document.getElementById("keylogger")
    textarea.value += event.key
}
})