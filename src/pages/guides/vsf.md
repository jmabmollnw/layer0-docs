---
title: Vue Storefront Next
---

Follow these steps to deploy a Vue Storefront Next app on {{ PRODUCT }}. As of now {{ PRODUCT }} is only compatible with the [Vue Storefront Next CLI tool](https://docs-next.vuestorefront.io/commercetools/getting-started.html#with-vue-storefront-cli-recommended).

For adding {{ PRODUCT }} to Vue Storefront 1 app follow this [guide](/guides/vsf1).

## Example {/*example*/}

Here's an example Vue Storefront 2 app running on {{ PRODUCT }}:

<ExampleButtons
  title="Vue Storefront"
  siteUrl="https://layer0-docs-layer0-vue-storefront-commercetools-example-default.layer0-limelight.link"
  repoUrl="https://github.com/layer0-docs/layer0-vue-storefront-commercetools-example" 
  deployFromRepo />

{{ PREREQ }}

## Install the VSF CLI {/*install-the-vsf-cli*/}

The Vue Storefront CLI tool will generate a preconfigured boilerplate project for you. Use these commands to create a new project and update to the latest dependencies.

```bash
npm i -g @vue-storefront/cli@next
vsf init <project-name>
cd <project-name>
npm install
```

## Configuring your Vue Storefront app for {{ PRODUCT }} {/*configuring-your-vue-storefront-app-for-edgio*/}

### Initialize your project {/*initialize-your-project*/}

In the root directory of your project run `{{ CLI_NAME }} init`:

```bash
{{ CLI_NAME }} init
```

The {{ PRODUCT }} init command should have automatically moved all your `modules` to `buildModules` in order to deploy the smallest possible build to {{ PRODUCT }}.

Ensure `@nuxtjs/pwa` is not present in the `buildModules`. It is not needed because `{{ PACKAGE_NAME }}/nuxt/module` builds and injects its own service worker.

## Development {/*development*/}

Test your app with the {{ PRODUCT_PLATFORM }} on your local machine by running the following command in your project's root directory:

```bash
{{ CLI_NAME }} dev --cache
```

## Building and Deploying {/*building-and-deploying*/}

Deploy your app to the {{ PRODUCT_PLATFORM }} by running the following command in your project's root directory:

```bash
{{ CLI_NAME }} deploy
```