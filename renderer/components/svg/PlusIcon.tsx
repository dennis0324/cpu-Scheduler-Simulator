//License: PD. Made by Mary Akveo: https://maryakveo.com/

function PlusIcon({size,color="#000"}){
    return(
        <svg fill={color} width={size} height={size} viewBox="0 0 24 24" id="plus" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" className="icon line-color"><path id="primary" d="M5,12H19M12,5V19" style={{fill: "none" ,stroke:color ,strokeLinecap: "round",strokeLinejoin: "round" ,strokeWidth: 1}}></path></svg>
    )
}

export default PlusIcon