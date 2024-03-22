import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import DeffinitionDisplay from "../components/DeffinitionDisplay.tsx";

export type Definition = {
  definition: string;
  example: string | undefined;
};
export type DefinitionsSet = {
  meanings: [Definition];
};
const DictionaryCSR: FunctionComponent = () => {
  const [word, setWord] = useState<string>("");
  const [definitions, setDefinitions] = useState<Definition[]>([]);
  const [error, setError] = useState<string>("");
  const searchWord = async () => {
    setDefinitions([]);
    if (word === "") {
      setError("Please enter a word");
      return;
    }
    console.log("Searching");
    console.log(definitions);
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`,
    );
    const data = await response.json();
    const newDefs: Definition[] = [];
    data.map((set) => {
      set.meanings[0].definitions.map((defs: Definition) => {
        newDefs.push({
          definition: defs.definition,
          example: defs.example || undefined,
        });
      });
    });
    setDefinitions(newDefs);
    console.log(definitions);
  };
  return (
    <div>
      <div class="gray-borders">
        <input
          placeholder="Type a word"
          type="text"
          onInput={(e) => setWord(e.currentTarget.value)}
          onFocus={() => setError("")}
        />
        <button onClick={searchWord}>Search</button>
      </div>
      {error !== "" && <span>{error}</span>}
      {definitions.length !== 0 && (
        <div class="gray-borders">
          {definitions.map((def) => (
            <DeffinitionDisplay
              definition={def.definition}
              example={def.example}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default DictionaryCSR;
