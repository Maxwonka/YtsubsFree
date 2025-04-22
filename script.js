function startGeneration() {
  const input = document.getElementById("channelInput").value;
  const progressBar = document.getElementById("progressBar");
  const progressSection = document.getElementById("progressSection");
  const progressText = document.getElementById("progressText");

  if (!input.trim().startsWith("http")) {
    alert("Please enter a valid YouTube channel link!");
    return;
  }

  progressSection.style.display = "block";

  let progress = 0;
  const steps = [
    "Validating link...",
    "Connecting to YouTube API...",
    "Bypassing algorithm...",
    "Injecting subscriber packets...",
    "Finalizing...",
  ];

  const interval = setInterval(() => {
    progress += 5;
    progressBar.style.width = `${progress}%`;

    if (progress < 100) {
      const stepIndex = Math.floor(progress / (100 / steps.length));
      progressText.textContent = steps[Math.min(stepIndex, steps.length - 1)];
    } else {
      clearInterval(interval);
      progressText.textContent = "Success!";
      setTimeout(() => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      }, 1000);
    }
  }, 200);
}
