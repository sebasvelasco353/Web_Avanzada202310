import React from 'react'
import './../styles/Cards.css'

import { Trash3 } from 'react-bootstrap-icons';


export default function EventCard(props) {

  const removeHandler = () => {
    props.removeHandler(props.eventIndex)
  }

  const modifyType = 1;

  return (

    <div className='Card'>
        <h3 className='Card__title'> {props.title} </h3>
        <br />

        <p className='Card__description'> {props.description} </p>
        <br />

        <p className="Card__dates"> {props.dates} </p>
        <br />
        
        <section className="Card__button__section">

          <button onClick={() => removeHandler()} className='Card__remove__button'>
            <p>Eliminar <Trash3/></p>  
          </button>

          <button onClick = {()=>props.updateHandler(true, modifyType, props.eventIndex, props.title, props.description, props.dates)}
           className='Card__edit__button'> Editar </button>
       
        </section>
    
    </div>

  )
}
