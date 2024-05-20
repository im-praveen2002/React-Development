import {useState} from 'react';

function UpdateObjectsofList(){

    const[cars, setCars] = useState([])
    const[model,setModel] = useState("")
    const[year,setYear] = useState(new Date().getFullYear())

    function addCar(){
        const newValues = {
            carmodel:model,
            caryear:year
        }

        setCars( c=> [...c,newValues])
        setYear(new Date().getFullYear())
        setModel("")

    }

    function delCar(index){


        setCars(
            cars.filter((_,i) => index !==i )
        )
    }

    function handleModel(e){
        setModel(e.target.value)
    }

    function handleYear(e){
        setYear(e.target.value)
    }

    return(
        <div style={{backgroundColor:"gray"}}>
        <h1> CARS LIST:</h1>

        <ol>
            {cars.map((c,index)=> 

                    <li key={index} onClick={()=> delCar(index)}> {c.carmodel} {c.caryear} </li>
            )}
        </ol>

        <input type="text" value={model} onChange={e => handleModel(e)} placeholder='Enter a Model Name..'/> <br />
        <input type="number"  value={year} onChange={e =>handleYear(e)}/> <br />
        <button onClick={addCar}> Add Car</button>
        </div>

    );
}


export default UpdateObjectsofList;