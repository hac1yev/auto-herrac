var dropdown = document.querySelectorAll(".dropdown-dash");
var dropdownArray = Array.prototype.slice.call(dropdown, 0);
dropdownArray.forEach(function (el) {
  var button = el.querySelector('a[data-toggle="dropdown"]'),
    menu = el.querySelector(".dropdown-menu-dash"),
    arrow = button.querySelector("i.icon-arrow");

  button.onclick = function (event) {
    if (!menu.hasClass("show")) {
      menu.classList.add("show");
      menu.classList.remove("hide");
      event.preventDefault();
    } else {
      menu.classList.remove("show");
      menu.classList.add("hide");
      event.preventDefault();
    }
  };
});

Element.prototype.hasClass = function (className) {
  return (
    this.className &&
    new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className)
  );
};