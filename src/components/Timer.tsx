// import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect } from "react";
type Props = {
    interval: number,
    city: string,
    gmt: number,
    className?: string

}
const Timer: React.FC<Props> = ({interval, city,gmt, className}) => {
    const [time, setTime] = React.useState(new Date());
    function tic(): void {
        // console.log("kuku");

       

        const newDate = new Date();
        newDate.setHours(newDate.getHours()+gmt-3);
        setTime(newDate);

    }
    useEffect(() => {
        setInterval(tic, interval);
    }, [])
   
    return <div className={className}>
        <h3>Current Time</h3>
        <p>{city}</p>
        <label>{time.toLocaleTimeString()}</label>
        
        </div>
        
}

export default Timer;



// const TimerLondon: React.FC<Props> = ({interval}) => {
//     const [time, setTime] = React.useState(new Date());
//     function tic(): void {
//         console.log("kuku");
//         setTime(new Date());

//     }
//     useEffect(() => {
//         setInterval(tic, interval || 1000);
//     }, [])
   
//     return <div style={{marginLeft:'50vw'}}>
//         <h3>Current Time Israel</h3>
//         <label>{time.toLocaleTimeString()}</label>  
        
//     </div>
// }
// export default TimerLondon;


/* 
<h3>Current Time Izhevsk</h3>
<label>{time.toLocaleTimeString()}</label>
<h3>Current Time Moskov</h3>
<label>{time.toLocaleTimeString()}</label>
<h3>Current Time Kiev</h3>
<label>{time.toLocaleTimeString()}</label>
<h3>Current Time London</h3>
<label>{time.toLocaleTimeString()}</label>
<h3>Current Time Tokio</h3>
<label>{time.toLocaleTimeString()}</label>
*/