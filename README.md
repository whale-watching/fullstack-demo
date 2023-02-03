# FullStack(Nuxt.js, Node.js) Demo.

## Installation

**1) Startup**

Clone project repository to your local directory:

```bash
git clone git@github.com:whale-watching/fullstack-demo.git
```

Install project dependencies:

```bash
npm install
```

Set your local `.env` file:

```bash
npm run env
```
> *You may want to override created .env file by other settings*

**2) Module configuration**

Follow **CLI** steps to configure project:

```bash
npm run modules
```

You might want automatically setup all modules by executing command:
```bash
npm run modules:all
```
> All available modules can be found in the `package.json` file in the `_availableModules` section, and required modules in the `_requiredModules` section.

> The `_availableModules` is an object where the key is the module name and the value is the module type.
The `local` type defines local modules located in the `modules` directory, and the `npm` type defines modules hosted on npm.

**3) Build**

Run development mode

```bash
npm run dev
```

Run production mode

```bash
npm run build
npm run start
```

> *After you set up [backend application][backend] and generated default fixtures you may login into application with credentials `test@gmail.com`, password: `abcd1234`*

**4) Docker**

Installation guide at [docker repository][docker]

## Browser

We recommend using the latest version of **Chrome** browser.
On other browsers some functionalities may not work as intended.


## Technologies

- Vue.js
- Nuxt.js
- Node.js
- SASS
- Axios
- BEM (CSS)
- ESLint (Airbnb standard)
- Cypress
- JestJS

## Is it production ready

Yes!

## Partners

This project is open-source, and it can be brought to you only by great web developer and partners supported by our core team. If you want to be on that list please send us an email: chenchrissh@gmail.com

