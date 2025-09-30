const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

const percentageText = document.querySelector(".percentage");
const audio = document.getElementById("boomBam");

let progress = 0;
let interval = setInterval(() => {
  progress += 5;
  if (progress > 100) {
    progress = 100;
    clearInterval(interval);
  }

  // Update circle progress
  const offset = circumference - (progress / 100) * circumference;
  circle.style.strokeDashoffset = offset;

  // Update percentage
  percentageText.textContent = progress + "%";

  // Play boom bam sound
  audio.currentTime = 0;
  audio.play();

}, 1000); // every 1 sec (Boom Bam rhythm)
