import { FunctionComponent } from "preact";
import { Definition } from "../islands/DictionaryCSR.tsx";
import DeffinitionDisplay from "./DeffinitionDisplay.tsx";
export type DefinitionsArray = {
  word: string;
  definitions: Definition[];
};
const DefinitionsArrayDisplay: FunctionComponent<DefinitionsArray> = (
  props,
) => {
  return (
    <div class="results-display">
      <h3>{props.word}</h3>
      {props.definitions.map((def) => (
        <DeffinitionDisplay
          definition={def.definition}
          example={def.example}
        />
      ))}
    </div>
  );
};

export default DefinitionsArrayDisplay;
