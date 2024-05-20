import {useState} from 'react';
function UpdateObjects(){

    const [myobj, setMyobj] = useState({name:"Lancer",model:"Evolution",year:"2007"})


    function UpdateName(e){
        setMyobj( (m) => ({...m,name:e.target.value}) )
    }

    function UpdateModel(e){
        setMyobj( (m) => ({...m,model:e.target.value}) )

    }

    function UpdateYear(e){
        setMyobj( (m) => ({...m,year:e.target.value}))
    }

    return(

        <div style={{backgroundColor:"aqua"}}>

            <h1>Car:{myobj.name}</h1>
            <p>Make:{myobj.model} <br /> Year:{myobj.year}</p>
            
            <input type="text" value={myobj.name} onChange={(e) =>UpdateName(e)} /> <br />
            <input type="text" value={myobj.model} onChange={(e) => UpdateModel(e)}/><br />
            <input type="number" value={myobj.year} onChange={(e) =>UpdateYear(e)}/><br />
        </div>
    )
}


export default UpdateObjects;