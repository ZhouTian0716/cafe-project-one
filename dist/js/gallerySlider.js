const track = document.getElementById("image-track");

const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = (e) => {
  //   if (e.target !== track) return;
  //
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  //   const maxDelta = window.innerWidth / 2;
  const maxDelta = window.innerWidth;
  const moveSpeed = 1;
  const percentage = moveSpeed * (mouseDelta / maxDelta) * -100;
  const nextPercentageUnconstrained =
    parseFloat(track.dataset.prevPercentage) + percentage;

  const nextPercentage = Math.max(
    Math.min(nextPercentageUnconstrained, 5),
    -60
  );

  track.dataset.percentage = nextPercentage;
  track.animate(
    {
      transform: `translateX(${nextPercentage}%)`,
    },
    { duration: 2000, fill: "forwards" }
  );

  for (const image of track.getElementsByClassName("menu__image")) {
    image.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      { duration: 3000, fill: "forwards" }
    );
  }
};

/* -- Touch events for mobile-- */

window.onmousedown = (e) => handleOnDown(e);

window.ontouchstart = (e) => handleOnDown(e.touches[0]);

window.onmouseup = (e) => handleOnUp(e);

window.ontouchend = (e) => handleOnUp(e.touches[0]);

window.onmousemove = (e) => handleOnMove(e);

window.ontouchmove = (e) => handleOnMove(e.touches[0]);
