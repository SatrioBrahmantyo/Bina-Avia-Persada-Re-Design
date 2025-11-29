const track = document.getElementById("sliderTrack");
const next = document.getElementById("nextBtn");
const prev = document.getElementById("prevBtn");

let position = 0;
const cardWidth = 320; // 300px card + gap

next.addEventListener("click", () => {
    position -= cardWidth;
    track.style.transform = `translateX(${position}px)`;
});

prev.addEventListener("click", () => {
    position += cardWidth;
    track.style.transform = `translateX(${position}px)`;
});
