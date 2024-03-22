import { FunctionComponent } from "preact";
import { Definition } from "../islands/DictionaryCSR.tsx";
const DeffinitionDisplay: FunctionComponent<Definition> = (props) => {
  return (
    <div class="definition-display">
      <h5>Definition:</h5>
      <span>{props.definition}</span>
      {props.example && (
        <div>
          <h5>Example:</h5>
          <span>{props.example}</span>
        </div>
      )}
    </div>
  );
};

export default DeffinitionDisplay;
