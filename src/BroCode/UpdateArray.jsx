import {useState} from 'react';

function UpdateArray(){

    const [values, setValues] = useState(['Audi','BMW','Mercedes'])

    function addArray(){

        const newvalue = document.getElementById('Adding').value
        
        if (newvalue.length>1){setValues(v => [...v,newvalue])}
            

        // Reset the input element after the add operation
        document.getElementById('Adding').value = ""
    }

    function delArray(index){

            setValues(
                values.filter( (_, i) => i!==index )
            )
    }


    return(
        <div style={{backgroundColor:"grey"}}>

            <h3> Car Models:</h3>
            <ol>
                {values.map(
                    (value, index) => <li key={index}> {value}  <button onClick={() =>delArray(index)}> del </button></li> 
                )}
            </ol>
            <input type="text" placeholder='Create a new Model' id='Adding'/>
            <button onClick={addArray}> Add Car</button>

        </div>
    );
}

export default UpdateArray;