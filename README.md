### Microfrontend and its BFF for energy efficient products.

Published for my 'Experiences not Microfrontends' talk, Chicago React Meetup, September 2023.

<a href="https://github.com/colinyoung/chicago-react-meetup-microfrontends/blob/main/Microfrontends%20and%20their%20BFFs%20-%20Colin%20Young.pdf"><img width="648" alt="Experiences Not Microfrontends talk introduction slide" src="https://github.com/colinyoung/chicago-react-meetup-microfrontends/assets/173257/e2410298-d0f2-41e5-a65c-532f505bb930"></a>

## Slides

- [PDF slides](./Microfrontends%20and%20their%20BFFs%20-%20Colin%20Young.pdf)
- [Powerpoint](./Microfrontends%20and%20their%20BFFs%20-%20Colin%20Young.pptx)
- [Keynote source](./Microfrontends%20and%20their%20BFFs%20-%20Colin%20Young.key)

## To Run

1. Start the BFF/API server using the readme in [bffs/products](./bffs/products). (There's only one microfrontend right now, Products, so there's also only one BFF.)
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

### Check it out

- [ ] The BFF is a Node.js server that serves up the API and the microfrontend. It's not a microfrontend itself, but its types are in Typescript. If you update its openapi spec, you can regenerate them with `npm run build-types` in `roll-your-own/products`.
- [ ] It's possible to include other microfrontends from root-configs - see the `single-spa/root-config`'s import map for an example.
- [ ] I changed the ProductsExperience microfrontend to be installed via a [.hydrate()](https://github.com/colinyoung/chicago-react-meetup-microfrontends/blob/584ca4005818afbcacac7394dbed596391ff0283/roll-your-own/products/src/ProductsExperience.tsx#L11) function, so that's how you'd bootstrap stuff. You can see this happening in the example [index.html](https://github.com/colinyoung/chicago-react-meetup-microfrontends/blob/56657544871f26bb93f2e3480ef4cbd72f2fadf5/roll-your-own/products/public/index.html#L23) files.

### TODOS

- For the Roll-Your-Own implementation:
  - Hot reloading in dev (would use an esbuild plugin)
  - Experiment with SSR
- For Frint
  - Actually make a demo 😉
