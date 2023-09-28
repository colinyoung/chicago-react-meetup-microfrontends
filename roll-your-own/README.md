## Roll-your-own proof of concept

### Reasoning

My idea here is to make an example of how microfrontends can be built from first principles. They're not that complex, especially now that React uses multiple roots automatically with [React.createRoot](https://react.dev/reference/react-dom/client/createRoot).

Important considerations:

- Optimize your bundle by using module federation (seen in the products)

### TODOS

- Hot reloading in dev (would use an esbuild plugin)
- Experiment with SSR
