# @iteria-app/vite-plugin-lowcode [![npm](https://img.shields.io/npm/v/@iteria-app/vite-plugin-lowcode.svg)](https://www.npmjs.com/package/@iteria-app/vite-plugin-lowcode)

## Usage

```ts
//vite.config.ts
import iteriaLowcode from '@iteria-app/vite-plugin-lowcode'

export default {
  plugins: [
    iteriaLowcode({
      graphQLEndpoint: 'https://your.endpoint.com/graphql'
      injectDevServer: true
    })
  ]
}
```

## Options

```ts
export interface Options {
  graphQLEndpoint: string
  injectDevServer: boolean
  version?: number

  /**
   * Feature flags allowing you to modify lowcode behaviour without changing code - by default all are set to true
   */
  features?: {
    tippy?: boolean
    generator?: boolean
    addFields?: boolean
    translations?: boolean
    themeEditor?: boolean
    graphQLEndpoint?: boolean
    floatingButton?: boolean
  }
}
```

## Examples for passing options to plugin

```ts
export default {
  plugins: [
    iteriaLowcode({
      graphQLEndpoint: 'https://your.endpoint.com/graphql',
      injectDevServer: true,
      features: {
        tippy: true, //explicitly enables tippy feature
        translations: false, //turns off translation sheet feature in floating action button
        themeEditor: true, //turns off themeEditor feature
      },
    }),
  ],
}
```
