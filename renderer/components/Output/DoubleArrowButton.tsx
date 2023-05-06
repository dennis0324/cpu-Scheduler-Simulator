import { useState } from "react"
import DoubleArrow from "../svg/DoubleArrow"

function DoubleArrowButton({onButtonDelete}){
    const [color, setColor] = useState("#53646f")

    return(
        <button
            onClick={() => onButtonDelete()}
        >
            <DoubleArrow size={25} color={"#53646f"}/>
        </button>
    )
}

export default DoubleArrowButton

