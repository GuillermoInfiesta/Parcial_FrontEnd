import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import DeffinitionDisplay from "../components/DeffinitionDisplay.tsx";
import DefinitionsArrayDisplay from "../components/DefinitionsArrDisplay.tsx";

export type Definition = {
  definition: string;
  example: string | undefined;
};
export type DefinitionsSet = {
  meanings: [Definition];
};
const DictionaryCSR: FunctionComponent = () => {
  const [word, setWord] = useState<string>("");
  const [lastSearch, setLastSearch] = useState<string>("");
  const [definitions, setDefinitions] = useState<Definition[]>([]);
  const [error, setError] = useState<string>("");
  const searchWord = async () => {
    if (word === "") {
      setError("Please enter a word");
      return;
    }
    setDefinitions([]);
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
    setLastSearch(word);
    console.log(definitions);
  };
  return (
    <div class="width-100">
      <div class="search-bar">
        <div class="search-form">
          <input
            placeholder="Type a word"
            type="text"
            onInput={(e) => {
              setWord(e.currentTarget.value);
              setError("");
            }}
          />
          <button onClick={searchWord}>Search</button>
        </div>
        {error !== "" && <p class="error">{error}</p>}
      </div>
      {definitions.length !== 0 &&
        (
          <DefinitionsArrayDisplay
            word={lastSearch}
            definitions={definitions}
          />
        )}
    </div>
  );
};
export default DictionaryCSR;
