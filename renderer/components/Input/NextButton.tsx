import { useState } from "react"
import NextIcon from "../svg/NextIcon"

function NextButton({onButtonDelete}){
    const [color, setColor] = useState("#53646f")
    // const enter = () => setColor("rgb(251 113 133)")
    // const leave = () => setColor("#53646f")
    return(
        <button
            onClick={() => onButtonDelete()}
        >
            <NextIcon size={30} color={color}/>
        </button>
    )
}

export default NextButton

