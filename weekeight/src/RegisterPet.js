
import { useState } from 'react';


export default function RegisterPet(props) {
    const [petName, setPetName] = useState("");
    const [petAge, setPetAge] = useState();
    return (
      <div>
        <div>
          <label for="pet_name">Name:</label>
          <input
            id="pet_name"
            value={petName}
            onChange={(e) => {
              setPetName(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="pet_age">Age:</label>
          <input
            id="pet_age"
            value={petAge}
            onChange={(e) => {
              setPetAge(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              props.setPetsFunction([
                ...props.petsArray,
                { name: petName, age: petAge }
              ]);
              setPetName("");
              setPetAge("");
            }}
          >
            Register
          </button>
        </div>
      </div>
    );
  }