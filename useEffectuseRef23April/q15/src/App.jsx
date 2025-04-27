import { useRef } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
 let videoRef= useRef(null);
 const handlePlay= ()=>{
  videoRef.current.play()
 }

 const handleStop=()=>{
   videoRef.current.pause()
 }
  return (
    <>
      <video  ref={videoRef} width="100%">
        <source src="Fastest Way to Learn ANY Programming Language_ 80-20 rule.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={handlePlay}>Play video</button>
      <button onClick={handleStop}>Stop</button>
    {  console.log(videoRef)}
    </>
  );
}

export default App;
