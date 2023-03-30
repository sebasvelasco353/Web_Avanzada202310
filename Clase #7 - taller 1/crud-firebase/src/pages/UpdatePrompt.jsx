import React from 'react'
import { useRef } from 'react'

import './../styles/Home.css'
import { useState } from 'react';

export default function UpdatePrompt(props) {
      
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [dates, setDates] = useState(props.dates);  

    const saveData = () => {
        if(props.updateType === 1){
            props.updateHandler(props.index, title, description, dates);
        }else{

            props.createHandler(title, description, dates)
        }
        props.visibilityHandler(false, '', '', '');
    }

    const cancel = () => {
        setTitle('');
        setDescription('');
        setDates('');

        props.visibilityHandler(false, '', '', '');
    }

    function defineVisibility(){
        if(props.modalOpen !== '') return 'block';
        return 'none'
    }

    return (
    <div className='Update__prompt__container' style={{display: `${()=>defineVisibility()}`}}>
        <div className='Update__prompt__container__div'>
            
            <section className="Update__prompt__input__section">
                <input className='Update__prompt__input' type="text" placeholder = 'Título' name="inputTitle" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <input className='Update__prompt__input' type="text"  placeholder = 'Descripción' name="inputDescription" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <input className='Update__prompt__input' type="text"  placeholder = 'Fecha inicio - Fecha fin' name="inputDates" value={dates} onChange={(e)=>setDates(e.target.value)}/>
            </section>

            <section className="Update__prompt__buttons__section">
                <button className='Update__prompt__buttons__cancel' onClick={()=>cancel()}>Cancel</button>
                <button className='Update__prompt__buttons__save'onClick={()=>saveData()}>Save</button>
            </section>
        </div>
    </div>
  )
}
