const navigation = document.querySelector('#navigation');
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		navigation.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !navigation.classList.contains("scroll-down")) {
		navigation.classList.remove("scroll-up");
		navigation.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		navigation.classList.contains("scroll-down")
	) {
		navigation.classList.remove("scroll-down");
		navigation.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});