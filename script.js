let timerInterval;

function toggleSubtitles(sectionId) {
  const subtitles = document.getElementById(sectionId);
  const isVisible = subtitles.style.display === 'block';

  if (isVisible) {
    subtitles.style.display = 'none';
    clearInterval(timerInterval);
  } else {
    subtitles.style.display = 'block';
    startTimer();
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    console.log(`الوقت الحالي: ${formattedDate}`);
  }, 60000);
}
