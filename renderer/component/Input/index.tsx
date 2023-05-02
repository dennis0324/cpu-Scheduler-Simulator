import React, { Dispatch, SetStateAction, useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import SelectAlgor, { defaultOption } from './SelectAlgor';
import AddButton from './AddButton';
import ProcessConatiner from './ProcessContainer';


export const StyledSelect = styled(Select)`
  .react-select__control {
    box-sizing: border-box;
    border-color: #c5c7d0;
    height: 41px;
    &:hover {
      background-color: #fafafa;
    }
  }
  .react-select__control--is-focused {
    background-color: #fff;
    box-shadow: 0 0 0px 1px #74b0ff;
    border: 1px solid #2684ff;
    &:hover {
      background-color: #fff;
    }
  }
  .react-select__control--menu-is-open {
    box-shadow: 0 0 5px 1px #74b0ff;
    border: 1px solid #2684ff;
  }
  .react-select__value-container {
    padding: 0 8px;
    font-size: 14px;
  }
  .react-select__option {
    font-size: 14px;
  }
`;

function Input(){
  const [selectedAlgo, setSelectedAlgo] = useState(defaultOption);
  const buttonPressed = () => {
    console.log("button pressed");

  }

  return (
    <div>
      <fieldset>
        <label>Cpu Scheduling Alogorithm</label>
        <SelectAlgor
        selectedAlgo={selectedAlgo}
        setSelectedAlgo={setSelectedAlgo}
      />
      </fieldset>
      <fieldset>
        <label>Process</label>
        <ProcessConatiner/>
      </fieldset>
    </div>
  );
};

export default Input;