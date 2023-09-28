import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@colinyoung/products-experience",
  app: () => System.import("@colinyoung/products-experience"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
