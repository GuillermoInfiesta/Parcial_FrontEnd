import { FunctionComponent } from "preact";
import { Definition } from "../islands/DictionaryCSR.tsx";
const DeffinitionDisplay: FunctionComponent<Definition> = (props) => {
  return (
    <div class="definition-display">
      <strong>Definition:</strong>
      <br />
      <span>{props.definition}</span>
      {props.example && (
        <div>
          <strong>Example:</strong>
          <br />
          <span>{props.example}</span>
        </div>
      )}
    </div>
  );
};

export default DeffinitionDisplay;
