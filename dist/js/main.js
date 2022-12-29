const navigation = document.querySelector(".navigation");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    navigation.classList.remove("scroll-up");
    return;
  }

  if (
    currentScroll > lastScroll &&
    !navigation.classList.contains("scroll-down")
  ) {
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

// Menu feature (note: I am developing this feature)
const menuItems = document.querySelectorAll(".menu--item");
//✔
menuItems.forEach((el) =>
  el.addEventListener("click", (e) => {
    // console.log(e.target);
    // const styles = window.getComputedStyle(e.target, "::before");
    // console.log(styles.content);
    if (e.target.getAttribute("data-content") === "➕") {
      e.target.setAttribute("data-content", "✔");
    } else {
      e.target.setAttribute("data-content", "➕");
    }
  })
);
