
import ButtonsContainer from "./ButtonsContainer";
import Buttions from "./Buttons";
import Pets from "./Pets";
import RegisterPet from "./RegisterPet";

import { useState } from "react";

export default function App() {
  const mySharedMethod = () => {
    alert("Yay, It works!");
  };

  const [pets, setPets] = useState([]);

  return (
    <div className="App">

      <ButtonsContainer sharedMethod={mySharedMethod} />


      <Pets petsList={pets} />

      <RegisterPet petsArray={pets} setPetsFunction={setPets} />

    </div>
  );
}



// function RegisterPet(props) {
//   const [petName, setPetName] = useState("");
//   const [petAge, setPetAge] = useState();
//   return (
//     <div>
//       <div>
//         <label for="pet_name">Name:</label>
//         <input
//           id="pet_name"
//           value={petName}
//           onChange={(e) => {
//             setPetName(e.target.value);
//           }}
//         />
//       </div>
//       <div>
//         <label for="pet_age">Age:</label>
//         <input
//           id="pet_age"
//           value={petAge}
//           onChange={(e) => {
//             setPetAge(e.target.value);
//           }}
//         />
//       </div>
//       <div>
//         <button
//           onClick={() => {
//             props.setPetsFunction([
//               ...props.petsArray,
//               { name: petName, age: petAge }
//             ]);
//             setPetName("");
//             setPetAge("");
//           }}
//         >
//           Register
//         </button>
//       </div>
//     </div>
//   );
// }

// function ButtonsContainer(props) {
//   return (
//     <div>
//       <Button sharedMethod={props.sharedMethod} />
//       <Button sharedMethod={props.sharedMethod} />
//       <Button sharedMethod={props.sharedMethod} />
//       <Button sharedMethod={props.sharedMethod} />
//     </div>
//   );
// }
// function Button(props) {
//   return (
//     <div>
//       <button onClick={props.sharedMethod}>Custom</button>
//     </div>
//   );
// }