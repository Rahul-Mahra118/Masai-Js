function timer(duration, onComplete) {
    setTimeout(() => {
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}
timer(6000,(message)=>{
    console.log(message)
})