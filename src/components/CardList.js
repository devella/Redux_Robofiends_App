import React from 'react';
import Card from './Card';
const CardList = ({robots}) => {
  if (true) {
    throw new Error('GOOOOO!');
  }
    /*const cardArray = robots.map((user, i)=>{
     return (
     <Card 
    key={user.id}
     id={robots[i].id} 
     name={robots[i].name} 
     email={robots[i].email}
      /> 
     );
    });*/
    return (
    <div>
    {
      /* {cardArray} */
        robots.map((user, i)=>{
     return (
     <Card 
    key={user.id}
     id={robots[i].id} 
     name={robots[i].name} 
     email={robots[i].email}
      /> 
     );
    })    
   }
    </div>
  );
}
export default CardList;