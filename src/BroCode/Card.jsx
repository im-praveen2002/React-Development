import Profile from '../Assests/my.jpg'
import './Card.css'

function Card(){

    return(
        <div className='my-div'>

            <img className="my-img" src={Profile} alt="Unfortunately img not found" />
            <h1 className='my-h1'>Praveen Kumar </h1>
            <p className='my-p'>Software Developer @ DSM SOFT</p>
        </div>
    )

}


export default Card;