use to check the if the call is form localhost or form live domain.

Install via NPM:

```
npm install @halfbug/is_base_url --save
```

## Usage

```javascript

import baseurl from "@halfbug/is_base_url";

baseurl == localhost ? "its local" : "any other domain";
```