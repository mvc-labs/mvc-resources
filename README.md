# MVC Resources

## Overview

This repository contains resources such as icons, logos, and other assets.

We use unpkg service to serve these assets.

To get the URL of an asset, use the provided `getAssetUrl` function.

```ts:
import { getIconUri } from '@mvc-org/mvc-resources'

const uri = getIconUri({
  type: 'metaContract',
  codehash: 'a2421f1e90c6048c36745edd44fad682e8644693',
  genesis: '94c2ae3fdbf95a4fb0d788c818cf5fcc7a9aa66a', // genesis for usdt
})

console.log(uri)
// https://unpkg.com/@mvc-org/mvc-resources/icons/meta-contract/usdt.jpg
```

## To add a new asset

- Fork this repository
- Add the asset to the appropriate folder.
- Add asset lookup rules to corresponding the rules file.
- Create a pull request to the main repository and wait for approval. It will be published to unpkg after approval.
