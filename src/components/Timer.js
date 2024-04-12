import { useState, useRef} from "react";

const Timer = () => {
    
    const intervalId = useRef(null);
    const prevTime = useRef(0);
    const [time,setTime] = useState(0);

    const handleButtonClick = (action) => {
        if(action==="Start"){
            intervalId.current = setInterval(() => {
                prevTime.current+=1;
                setTime(prevTime.current);
            },1000);
        }else if(action==="Pause"){
            clearInterval(intervalId.current);
        }else{
            clearInterval(intervalId.current);
            prevTime.current = 0;
            setTime(0);
        }
    }

    
    return(
        <div>
            <h1>Timer:{time} {console.log(time)}</h1>
            <button onClick={() => handleButtonClick("Reset")}>Reset</button>
            <button onClick={() => handleButtonClick("Pause")}>Pause</button>
            <button onClick={() => handleButtonClick("Start")}>Start</button>
        </div>
    );
}

export default Timer;