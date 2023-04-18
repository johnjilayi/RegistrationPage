import Buttons from "./Buttons"

export default function ButtonsContainer(props) {
      return (
        <div>
          <Buttons sharedMethod={props.sharedMethod} />
          <Buttons sharedMethod={props.sharedMethod} />
          <Buttons sharedMethod={props.sharedMethod} />
          <Buttons sharedMethod={props.sharedMethod} />
        </div>
      )
    }