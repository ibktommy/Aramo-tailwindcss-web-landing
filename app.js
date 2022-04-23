const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const menu = document.querySelector("#mobile-menu");

console.log(menu, menuOpen, menuClose);

menuOpen.addEventListener("click", function () {
	menuOpen.classList.add("hidden");
	menuClose.classList.remove("hidden");
	menu.classList.remove("hidden");
	menu.classList.add("flex");
});
menuClose.addEventListener("click", function () {
	menuOpen.classList.remove("hidden");
	menuClose.classList.add("hidden");
	menu.classList.add("hidden");
	menu.classList.remove("flex");
});
