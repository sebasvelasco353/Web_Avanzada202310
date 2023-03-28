import React from 'react'
import './../styles/Cards.css'

import { Trash3 } from 'react-bootstrap-icons';


export default function EventCard(props) {

  const removeHandler = () => {
    props.removeHandler(props.eventIndex)
  }

  return (

    <div className='Card'>
        <h3 className='Card__title'> {props.title} </h3>
        <br />

        <button onClick={() => removeHandler()} className='Card__remove__button'>
          <Trash3/>
        </button>

        <p className='Card__description'> {props.description} </p>
        <br />

        <p className="Card__dates"> {props.dates} </p>
        <br />

        <button className='Card__button'> Editar </button>
    </div>

  )
}
