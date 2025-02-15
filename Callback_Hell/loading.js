function timerInterval() {
  let count = 0;
  let intervalId = setInterval(() => {
    ++count;
    console.log("loading.....");

    if (count >= 5) {
      clearInterval(intervalId);
      console.log("Loaded successfully!");
    }
  }, 1000);
}

timerInterval();
