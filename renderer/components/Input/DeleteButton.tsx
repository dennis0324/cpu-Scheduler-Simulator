import { useState } from "react"
import TrashIcon from "../svg/TrashIcon"

function DeleteButton({index,onButtonDelete}){
    const [color, setColor] = useState("#53646f")
    const enter = () => setColor("rgb(251 113 133)")
    const leave = () => setColor("#53646f")
    return(
        <button 
            onClick={() => onButtonDelete(index)}
            onMouseEnter={() => enter()}
            onMouseLeave={() => leave()}
        >
            <TrashIcon size={25} color={color}/>
        </button>
    )
}

export default DeleteButton

