import { useEffect, useState } from "react";

function StopWatch()
{
    const[timer,setTimer]=useState(0);
    const[isRunning,setIsRunning]=useState(false);

    useEffect(()=>{
        let interval;
        if(isRunning){

            interval=setInterval(()=>{
                setTimer((prev)=>prev+1)
            },1000);
        }
        else{
            clearInterval(interval);
        }

        return (() => {
            clearInterval(interval);
        });

    },[isRunning]);


    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
      };

    return(
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {formatTime(timer)}</p>
            <button onClick={()=>{
                setIsRunning((prev)=>!prev);
            }}>{isRunning?"Stop":"Start"}</button>
           
            <button onClick={() => {
            setIsRunning(false);
            setTimer(0);
            }}>
            Reset
            </button>
        </div>
    )
}

export default StopWatch;