// Function to copy server IP address
function copyIP() {
    var copyText = document.getElementById("server-ip");
    copyText.select();
    document.execCommand("copy");
    alert("Server IP copied: " + copyText.value);
}
