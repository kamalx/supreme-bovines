Cows and Bulls [is a game...](https://en.wikipedia.org/wiki/Bulls_and_cows)

This is a basic numerical version of the game with terrible UX.
But behold, there will be updates, and you shall
[enjoy playing it](https://supreme-bovines-1.netlify.app/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/dff41c5a-1a96-41f8-91f7-239c50f7c2f5/deploy-status)](https://app.netlify.com/sites/supreme-bovines-1/deploys)

This project uses [react](https://react.dev) + [vite](https://vite.dev) + [Typescript](https://typescriptlang.org).

This was a learning experiment that has so far gone pretty good.
It includes a react app started from scratch using one of the pnpm
create commands for react projects:

```
pnpm create vite [project_name] --template react-ts
```

For routing, we install `react-router-dom`

```
pnpm install react-router-dom
```

For CSS pre-processing, we install `sass`

```
pnpm install sass
```

NOTE: All the above are now included in the package.json for this project and
you only need the following command to get up and going after checking out this
source code:

```
pnpm install
```

### CSS Preprocessing

Vite has built-in support for SCSS. All we need to do is add the SCSS code
inside our project's styles dir.

But it is essential to let the typescript compiler know that we want to import
these scss files as modules. For this, we have created a `types/declarations.d.ts`
inside the `src` dir. Check out the code for more.

References for the above:
https://stackoverflow.com/a/73342744/699556

We have used generous help from Ai chatbots to configure vite for this project and
we do not fully understand what we've done in this project for vite configuration yet.
Here's the documentation to understand vite configuration better: https://vite.dev/config/


---

Ref:
This project was an experiment with deepseek, and it was a delightful experience
of discovering something I was unfamiliar with with the help of a new opensource
ai model that I was trying out.
