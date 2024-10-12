import React, { useState } from 'react';
import { data } from '../data';

const UsingState = () => {
  const [people, setPeople] = useState(data);
  const removeOnClick = (id) => {
    let NewPeople = people.filter((person) => person.id !== id);
    setPeople(NewPeople)
  };
  return (
    <div>
      {people.map(({ id, name, age, hobby }) => {
        return (
          <div key={id}>
            <h1>
              {name} really enjoys{' '}
              <span style={{ color: 'red', backgroundColor: 'black' }}>{hobby}</span> at age {age}
            </h1>
            <button className="btn" onClick={() => removeOnClick(id)}>
              Remove {name}
            </button>
            <hr />
          </div>
        );
      })}
      <button className="btn" onClick={()=>setPeople([])}>Clear All</button>
    </div>
  );
};

export default UsingState;
