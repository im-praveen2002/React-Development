import {useState} from 'react';

function StopClock(){


    const [time, setTime] = useState(0)

    const TimeIncrement = () => {
        setTime(prev => prev+1)
        console.log(`Attempted Increment: ${time+1}`)
    }

    const TimeDecrement = () => {
        setTime(prev => prev-1)
        console.log(`Attempted Decrement: ${time-1}`)
    }


    return (

        <div style={{"backgroundColor":"grey"}}>

            <h1 style={{"textAlign":"center","color":"aqua"}}> {time} </h1>
            <div style={{"textAlign":"center"}}>
            <button onClick={TimeIncrement}> Increment </button>
            <button onClick={TimeDecrement}> Decrement </button>
            <button onClick={()=>setTime(0)}> Reset </button>
            </div>

        </div>
    )

}



export default StopClock;