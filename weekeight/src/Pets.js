export default function Pets(props) {
    return (
      <div>
        <div>A total of {props.petsList.length} pets have been registered</div>
        {props.petsList.map((pet) => (
          <div>
            {pet.name} is {pet.age} years old
          </div>
        ))}
      </div>
    );
  }