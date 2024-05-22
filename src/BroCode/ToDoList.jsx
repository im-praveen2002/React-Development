import {useState} from 'react'


function ToDoList(){


    const [tasks,setTasks] = useState(['Sleep','Code','Repeat'])
    const [task,setTask] = useState('')


    function TaskDown(index){

        const TempList = [...tasks]
        if (index<tasks.length-1)
        [TempList[index+1],TempList[index]] = [TempList[index], TempList[index+1]]
        setTasks(TempList)
    }

    function TaskUp(index){

        const TempList = [...tasks]
        if (index>0){
            [TempList[index],TempList[index-1]] = [TempList[index-1],TempList[index]]
            setTasks(TempList) 
        }
        

    }

    function DeleteTask(index){

        setTasks(
            tasks.filter((_,i) => index!==i)
        )

    }

    function AddTask(){

        setTasks(t => [...t,task])
        setTask('')
    }

    function UpdateTask(e){
        setTask(e.target.value)
        
    }

    return(
        <div style={{backgroundColor:"white"}}>
            
            <h1 > TO-DO-LIST</h1>

            <div>
                <input type="text" value={task} onChange={e => UpdateTask(e)} placeholder='Create a New Task...'/> 
                <button onClick={AddTask} > Add </button>

                <div>
                   <ol> {tasks.map((value,index)=> 
                   <li key={index}> 
                   {value} 
                   <button onClick={() => DeleteTask(index)}> Delete </button>
                   <button onClick={() => TaskUp(index)}> Up </button>
                   <button onClick={() => TaskDown(index)}> Down </button>
                   </li>)}
                   </ol>
                </div>


            </div>

        </div>
    )
}

export default ToDoList;