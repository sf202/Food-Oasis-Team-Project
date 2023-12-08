//Button actions
document.addEventListener("DOMContentLoaded", function () {

    console.log("Page loaded");


    const acceptButton = document.getElementById("acceptButton");
    acceptButton.addEventListener("click", function () {
        window.location.href = "/src/pages/main.html";
        console.log("Terms and conditions accepted");
    });
});

// document.addEventListener("DOMContentLoaded", function() {
//     const acceptButton = document.getElementById("seller");
//     acceptButton.addEventListener("click", function() {
//     window.location.href = "/src/pages/form.html";
// });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const acceptButton = document.getElementById("get");
//     acceptButton.addEventListener("click", function() {
//     window.location.href = "/src/pages/pform.html";
//     console.log("Supplier payment clicked");
// });
// });
