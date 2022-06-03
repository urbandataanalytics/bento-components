<p align="center">
  <a href="https://urbandataanalytics.github.io/bento-components/">
    <img alt="Bento Components Library" src="https://user-images.githubusercontent.com/4963216/82238273-4f3efb00-9937-11ea-9f5d-5fba78f91fc6.png" width="100%" />
  </a>
</p>
<h1 align="center">
  Bento Components Library
</h1>
<h3 align="center">
  Simple, robust & beautiful
</h3>

> :bento: (System to contain elements in an organized and beautiful way).
> Is an open-source component library built by Urban Data Analytics Team
> made with [React](https://github.com/facebook/react)

![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uda/bento-components)
![npm](https://img.shields.io/npm/v/@uda/bento-components)
[![CircleCI](https://img.shields.io/circleci/project/github/urbandataanalytics/bento-components/master.svg)](https://circleci.com/gh/urbandataanalytics/bento-components/tree/master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/af808985751f9bb17ec6/test_coverage)](https://codeclimate.com/github/urbandataanalytics/bento-components/test_coverage)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=urbandataanalytics/bento-components)](https://dependabot.com)

### Getting Started

Run the following command using [Yarn](https://yarnpkg.com/en/):

```bash
yarn add @uda/bento-components
```

If you prefer [npm](https://www.npmjs.com/), use the following command
instead:

```bash
npm install @uda/bento-components
```

## 🚀 Usage

Load Roboto font from CDN:

```html
<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" />
```

or via css:

```html
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700");
```

Now you can start using components:

```jsx
import { Button } from '@uda/bento-components';

const Sample = () => <Button>Bento rules!</Button>;
```

## 📚 Storybook

UI components guide

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://urbandataanalytics.github.io/bento-components/)

## 🧪 Update snapshots

```bash
 yarn test --updateSnapshot
```

## 🕹️ Playroom

**[Bento Playroom](https://urbandataanalytics.github.io/bento-components/)**

Create quick mock-ups and interactive prototypes with real code.

## 📋 Changelog

Please read the [changelog](https://github.com/urbandataanalytics/bento-components/releases).

## 📝 License

This project is licensed under the terms of the [MIT license](/LICENSE).
