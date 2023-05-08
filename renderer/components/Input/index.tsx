import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import SelectAlgor, { defaultOption } from './SelectAlgor';
import AddButton from './AddButton';
import ProcessConatiner from './ProcessContainer';
import {ControlProcess} from '../../pages/home';
import RunButton from './RunButton';
import { ipcRenderer } from 'electron';
import LoadIcon from '../svg/LoadIcon';

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

function Input(props:ControlProcess){
  const timeQuantum = () => {
    if(props.selectAlgor.value === 'RR' || props.selectAlgor.value === 'SRTF'){
      return (
        <div>
          TimQuatntum : 
          <input
            value={props.timeQuantum ? props.timeQuantum : ''}
            placeholder='time quantum eg. 1, 2'
            onChange={(e) => props.setTimeQuantum(e.target.value)}
          ></input>
        </div>
      )
    }
  }

  const load = () => {
    ipcRenderer.send('open-file-dialog')
  }
  
  return (
    <div className={'flex flex-col'}>
      <fieldset>
        <label>Cpu Scheduling Alogorithm</label>
        <SelectAlgor
        selectedAlgo={props.selectAlgor}
        setSelectedAlgo={props.changeAlgorithm}
      />
      </fieldset>
      <fieldset className='process-container'>
        <div className='flex justify-between'>
          <label>Process</label>
          <button onClick={load}>
            <LoadIcon size={25} color={"#53646f"}/>
          </button>
        </div>

        <ProcessConatiner
          {...props}
        />
      </fieldset>
      <fieldset>
        {timeQuantum()}
      </fieldset>
      <fieldset className={'self-center '}>
        <RunButton buttonPressed={props.simulate}/>
      </fieldset>
    </div>
  );
};

export default Input;