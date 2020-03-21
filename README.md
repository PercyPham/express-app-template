# express-app-template

This is the template for Node project which has ExpressJS as backend framework.

What this project has been setup:

- [babel](https://babeljs.io/docs/en/) (source code transformations)
- [jest](https://jestjs.io/) (testing framework)
- [supertest](https://github.com/visionmedia/supertest) (for http server's intergration tests)
- [eslint](https://eslint.org) (lint)
- [prettier](https://prettier.io/) (code formating)
- [husky](https://github.com/typicode/husky#readme) (for pre-commit hook)

## Get Started

Requirements:

- Node (version 12)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
- Docker (for building docker image)

_Note: You can use [nvm](https://github.com/nvm-sh/nvm) to switch between node versions easily._

Clone project:

```bash
git clone git@github.com:PercyPham/express-app-template.git [your-app-name]
```

## Development

Recommend using [VSCode](https://code.visualstudio.com/) for developing this project.

After installing VSCode, add extra extensions to VSCode:

- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [GitLens - Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

Config VSCode's workspace settings as below:

```json
{
  "settings": {
    "window.zoomLevel": 1,
    "editor.formatOnSave": true,
    "eslint.autoFixOnSave": true
  }
}
```

Install dependencies before starting development:

```bash
yarn install
```

Start project in development mode:

```
yarn dev
```

### Convention

#### Coding

This project already has lint set up.

To check lint for your code, run:

```bash
yarn lint
```

Check and fix your code before commit:

```bash
yarn lint:fix
```

## Test

### Run tests

> Note: Test code will get env variables defined in `.env.test` file.

Unit test:

```bash
# normal run
yarn test:unit

# run in watch mode
yarn test:unit --watch
```

Integration test

```bash
yarn test:integration
```

All test with coverage report (visual result will be placed in `.coverage` folder at same level with this README file)

```bash
yarn test:coverage
```

### Write tests

All test file should be placed under `__tests__` folder next to its tested function file.
Test files can also be placed inside `test` folder.

Unit test file name must be end with `.unit.test.js`

Integration test file name must be end with `.int.test.js`

For example:

```
utilFunc
├── __tests__
│   └── utilFunc.unit.test.js
├── utilFunc.js
└── index.js
```

## Build

Before building make a copy of [`.env.dev`](./.env.dev) and name it `.env`

And then change its content accordingly.

### Build Code Locally

Run:

```
yarn build
```

_Note: this will output the built folder `dist`._

To run the built code, simply run:

```
yarn start
```

### Build Docker Image

Run:

```
docker build -t [your-app-name] .
```

Run container:

```
docker run -p 5000:5000 [your-app-name]
```

_Note: suppose your app use default port 5000 (not defined it in `.env` file)._
