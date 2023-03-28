import React from 'react'
import { useRef } from 'react'


export default function UpdatePrompt() {
  
    const titleInput = useRef();
    const descriptionInput = useRef();
    const datesInput = useRef();

    const divInput = useRef();

    const saveData = () => {

        divInput.current.style.visibility = 'hidden';
    }

    const cancel = () => {
        titleInput.current.value = '';
        descriptionInput.current.value = '';
        datesInput.current.value = '';

        divInput.current.style.visibility = 'hidden';
    }

    return (
    <div ref={divInput}>
        <input ref={titleInput} type="text" name="inputTitle"/>
        <input ref={descriptionInput} type="text" name="inputDescription"/>
        <input ref={datesInput} type="text" name="inputDates"/>
        <button onClick={()=>cancel()}>Ca</button>
    </div>
  )
}
