import { useState } from "react";

function ColorPicker(){

    const [color,setColor] = useState("red")

    function ColorPickerHandler(e){

         setColor(e.target.value)

    }

    return(

        <div>

            <h1 style={{backgroundColor:color}}>Color: {color} </h1>
            <input type="color" onChange={(e) =>ColorPickerHandler(e)} />
        
        </div>

    );
}


export default ColorPicker;