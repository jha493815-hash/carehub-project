// Open popup when page loads
window.addEventListener("load", function () {
  document.getElementById("loginPopup").style.display = "block";
});

// Close popup
function closePopup() {
  document.getElementById("loginPopup").style.display = "none";
}

// Dummy login
function login() {
  alert("Login successful");
  closePopup();
}
