# Generate Custom Random ID

Simple custom random ID generator with Prefix and Suffix options

## Installation

Install generate-custom-id with npm

```bash
  npm install generate-custom-id
```

Install generate-custom-id with yarn

```bash
  yarn add generate-custom-id
```

## Usage/Examples

Simple generation with a single name:

```javascript
import { idGenerator } from "generate-custom-id";

const id = idGenerator("example"); //0505ompj
```

Simple generation with more characters:

```javascript
import { idGenerator } from "generate-custom-id";

const id = idGenerator("example", 4); //373AfhcfAc7E
```

Custom generation with options

```javascript
import { idGenerator } from "generate-custom-id";

const options = {
  prefix: "pre",
  sufix: "sux",
  trace: true,
};

const id = idGenerator("example", 2, 4, options); //pre-04Op40pz-sux
```

More options...

```javascript
import { idGenerator } from "generate-custom-id";

const options = {
  prefix: {
    prefix: "pre",
    trace: false,
  },
  sufix: "sux",
  trace: true,
};

const id = idGenerator("example", 4, options); //pre323vPpY2-sux
```

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@bankow](https://www.github.com/ibankow)
