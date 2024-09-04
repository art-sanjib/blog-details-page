let mobile_icon = document.getElementById("mobile_icon");
let main_menu = document.getElementById("main_menu");

mobile_icon.addEventListener("click", () => {
  main_menu.classList.toggle("hidden");
});


// sort section start
// window.addEventListener("load", function(event) {
//   document.querySelector('[data-dropdown-toggle="dropdown"]').click();
// });
// sort section end