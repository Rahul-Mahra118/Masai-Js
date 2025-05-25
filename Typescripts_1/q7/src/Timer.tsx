import { useEffect, useRef, useState } from "react";
type Ref = ReturnType<typeof setInterval> | null;


const Timer = () => {
  const [currentTime, setTime] = useState<number>(0);
  let ref = useRef<Ref>(0);
  const handleStart = () => {
    // clearInterval(timerId)
    ref.current = setInterval(() => {
      setTime((currentTime) => currentTime + 1);
    }, 1000);
  };

  const handleStop = () => {
    console.log(ref.current);
    if (ref.current) clearInterval(ref.current);
  };

  const handleReset = () => {
    if (ref.current) clearInterval(ref.current);
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, []);

  
  return (
    <div>
      <h2>{currentTime}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Timer;
