import React,{useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({id, title, info}) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article key= {id} className="question">

        <header>
        <h4 style= { showInfo ? {fontWeight : "700"} : {fontWeight : "500"} }>{title}</h4>
        <button className="btn" onClick={()=> setShowInfo(!showInfo)}>
         {showInfo ? <AiOutlinePlus/> : <AiOutlineMinus/> } 
        </button>
        </header>
        {showInfo && <p>{info}</p> }
        </article> 
    )
}

export default SingleQuestion
