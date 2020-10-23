## Demo
This repo is deployed on Vercel at https://fail-app.songbookstudio.vercel.app/ and it is connected to a project on Sentry where we are validating exception reporting.

## Getting Started

1. Clone https://github.com/kamilogorek/next-sentry-source-maps and link it to your local env (`yarn link`)
2. Do the same for https://github.com/kamilogorek/next-plugin-sentry
3. Modify `package.json` to point `next` to your local copy, eg. `file:/Users/kamilogorek/Projects/sentry/next.js/packages/next`.

```terminal
$ yarn
$ yarn link next-plugin-sentry next-sentry-source-maps
$ SENTRY_DSN=x SENTRY_RELEASE=x yarn dev
```

**In order for a plugin to be picked up, you need to modify your `node_modules/next/dist/build/plugins/collect-plugins.js` and change `name.match(/^@next\/plugin/)` to `name.match(/^@next\/plugin|next-plugin/)`. Or modify it in your local next.js instance, compile and reinstall in this repo as described below (holds true for 22 Oct. 3:19PM UTC).**

Changes to `next-plugin-sentry` and `next-sentry-source-maps` will be picked automatically once it's linked, so you don't have to do anything special once `yarn dev` is runnign.
Changes done to your local `next` instance however, have to be manually applied.
Once all changes are done, and the project is built (or you can use `yarn dev` inside the local next.js repo, which will run file watcher for you), you need to run:

```terminal
$ yarn --force
```

This will move all your local files from next.js repository to this projects `node_modules`. When done, you can run `yarn dev` here again, with `next` binary updated.