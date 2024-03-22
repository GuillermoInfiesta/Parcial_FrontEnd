// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $DictionaryCSR from "./routes/DictionaryCSR.tsx";
import * as $DictionarySSR from "./routes/DictionarySSR.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $index from "./routes/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $DictionaryCSR_1 from "./islands/DictionaryCSR.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/DictionaryCSR.tsx": $DictionaryCSR,
    "./routes/DictionarySSR.tsx": $DictionarySSR,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/DictionaryCSR.tsx": $DictionaryCSR_1,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
