### Microfrontend and its BFF for energy efficient products.

Published for my 'Experiences not Microfrontends' talk, Chicago React Meetup, September 2023.

## To Run

1. Start the BFF/API server using the readme in [bffs/products](./bff/products). (There's only one microfronted right now, Products, so there's also only one BFF.)
2. Figure out which sample you want to use, and run it using the readmes in [single-spa](./single-spa/) or [roll-your-own](./roll-your-own/).

## Quickstart

```bash
# Shell 1:
cd bffs/products; npm run dev

# Then, choose one of the following:

# RYO microfrontend, Shell 1:
cd roll-your-own/products; npm run dev
# RYO microfrontend, Shell 2 (this is the example article):
cd roll-your-own/products/example; npm run start

# Single-spa
cd single-spa/products; npm run start
cd single-spa/root-config; npm run start
```

### TODOS

- For the Roll-Your-Own implementation:
  - Hot reloading in dev (would use an esbuild plugin)
  - Experiment with SSR
- For Frint
  - Actually make a demo 😉
