import React from 'react'

export default function ListItem({item}) {
  return (
    <div key={item.id}>
        <h3>{item.id} - {item.release_date}</h3>
        <p>{item.director}</p>
    </div>
  )
}
