const track = document.getElementById("image-track");

const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = (e) => {
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
    -100
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

track.onmousedown = (e) => handleOnDown(e);

track.ontouchstart = (e) => handleOnDown(e.touches[0]);

track.onmouseup = (e) => handleOnUp(e);

track.ontouchend = (e) => handleOnUp(e.touches[0]);

track.onmousemove = (e) => handleOnMove(e);

track.ontouchmove = (e) => handleOnMove(e.touches[0]);
