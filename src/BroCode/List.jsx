function List(props){


    const getCategories = props.Categories
    const getValues = props.values

    //Filter Function:
    const FilteredFruits = getValues.filter(
        fruit => fruit.Calories>10
    )


    return(
        <div style={{color:"White"}}>
            <h1 style={{color:"red"}}>{getCategories} </h1>
            
            <ul>
                {getValues.map(
                fruit => <li key={fruit.Id}>{fruit.Name}: &nbsp;{fruit.Calories}</li> 
                )}
            </ul>

        </div>
    );
}


List.defaultProps = {
    Categories:"Not Defined",
    values:[{Id:1, Name:"Invalid Username",Calories:"NAN"}]
}



export default List;