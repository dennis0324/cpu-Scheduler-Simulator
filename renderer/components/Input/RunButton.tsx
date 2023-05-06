import PlusIcon from "../svg/PlusIcon";

function RunButton({buttonPressed}){
    return (
        <button className={'button px-2 py-4'} onClick={buttonPressed}>
            Simulate
            {/* <PlusIcon size={25} color={"#53646f"}/> */}
        </button>
    );
};

export default RunButton;