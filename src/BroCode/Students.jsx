import propTypes from 'prop-types'

function Students(props){


    // Inline Styles:
    const Styles = {

        backgroundColor: "aqua",
        font: "bold",
        fontFamily: 'Times New Roman', 
        color: "black",
        width:"150px",
        height:"150px",
        borderRadius: "5px",
        border: "none",
        display: "inline-block",
        margin:"10px",
        textAlign: "center",
    }



    return(

        <div style={Styles}>
            <p>Name: {props.name} </p>
            <p>Age: {props.age}</p>
            <p>Enrolled: {props.student? "Yes": "No"}</p>
        </div>
    );
}


Students.defaultProps = {
    name:"Guest",
    age: 0,
    student: false


}

Students.propTypes = {
    name:propTypes.string,
    age:propTypes.number,
    student:propTypes.bool,
}


export default Students;