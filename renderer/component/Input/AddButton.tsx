import stlye from "styled-components"

function AddButton({buttonPressed}){

    return (
        <button onClick={buttonPressed}>add</button>
    );
};

export default AddButton;