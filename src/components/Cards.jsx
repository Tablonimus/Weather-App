import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities.length){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div className='mes'>
        <h1>Busca una ciudad</h1></div>
    )
  }
}
