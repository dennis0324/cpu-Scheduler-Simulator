import PlusIcon from "../svg/PlusIcon";

function AddButton({buttonPressed}){
    return (
        <button onClick={buttonPressed}>
            <PlusIcon size={25} color={"#53646f"}/>
        </button>
    );
};

export default AddButton;