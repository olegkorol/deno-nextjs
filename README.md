# Next.js with Deno v2

An example of how to run a Next.js app on the Deno (v2) runtime and deploy it to the Deno Deploy platform.

This repo was created with the `create-next-app` CLI:

```bash
npx create-next-app@latest
# Selected to use Turbopack to get faster builds, but this is optional.
```

If you wish, you can create a new project with the aforementioned command and then follow the steps below.

## Quick Start

Make sure you have Deno installed:

```bash
deno --version
# deno should be >=2.0.0, if not run `deno upgrade`
# if the command was not found, head to https://deno.com/
```

Running the app locally in development mode:

```bash
deno run dev
```

Building the app:

```bash
deno run build
```

## Deno Deploy(ment)

You'll need `deployctl` to deploy to Deno Deploy:

```bash
# check if you have it installed
deployctl --version

# if not, you can install it with
deno install -gArf jsr:@deno/deployctl
```

Alright, let's actually deploy our Next.js app.

The process differs slightly based on the version of Next.js you're using.
This repo uses Next.js v15, so we'll run the first command after the build step:

```bash
deno run build

# For Next.js 15
deployctl deploy --include=.next --include=public jsr:@deno/nextjs-start/v15

# For Next.js 14
deployctl deploy --include=.next --include=public jsr:@deno/nextjs-start
```

That's it!

You'll see that a `deno.json` file is created in the root of the project (which is added to the `.gitignore` file so that you start from scratch).

## Notes

- https://docs.deno.com/runtime/reference/ts_config_migration/

## References

- https://github.com/nextjs/deploy-deno
- https://jsr.io/@deno/nextjs-start
- https://nextjs.org/docs/app/api-reference/cli/create-next-app
