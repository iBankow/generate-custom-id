
# Generate Custom Random ID

Simple custom random ID generator with Prefix and Suffix options

## Installation

Install generate-custom-id with npm

```bash
  npm install generate-custom-id
```

Install generate-custom-id yarn npm

```bash
  yarn add generate-custom-id
```

## Usage/Examples

Simple generation with a single name:

```javascript
import { idGenerator } from "generate-custom-id";

const id = idGenerator('example') //77amxelyCpe
```

Simple generation with more characters:

```javascript
import { idGenerator } from "generate-custom-id";

const id = idGenerator('example', 4) //3222epplmCqxeaN
```

Custom generation with options

```javascript
import { idGenerator } from "generate-custom-id";

const options = {
  prefix: "pre",
  sufix: "sux",
  trace: true,
};

const id = idGenerator('example', 4, options) //pre-3434mkplae5exB3-sux
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

const id = idGenerator('example', 4, options) //pre2027empexvmaXld-sux
```
## Licença

[MIT](https://choosealicense.com/licenses/mit/)
