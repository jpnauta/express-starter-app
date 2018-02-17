# express-starter-app

> Powerful template project for building a micro-service API server via [Express][expressjs]

## Features

Why should you use this template project?

- Environment variable configuration
- Streamlined Docker support
- ES2015 syntax and imports
- Strong linting via [eslint][eslint]
- JSON-based Express API
- Basic Mongoose layout (optional)
- API error handling
- Unit testing configuration

## Docker Usage

The easiest way to run this project is using [Docker Compose][docker-compose]

```
docker-compose build
docker-compose up
```

This will boot up a API server for this project, as well as simple 
MongoDB server.

To test your server, open your browser to 
[http://localhost:3000/][localhost].

## Local Usage

If you prefer not to use Docker, follow these steps to run the project
locally.

### Pre-requisites

You will need to make sure these dependencies are installed.

- [Node.js > 6][nodejs]
- [NPM][npm]
- [MongoDB][mongodb] (optional)

### Installation

To install the libraries for this project, run this command.

```bash
npm install
```

### Configuration

This project is configured using variables in your environment 
file. To initialize this file, copy the contents of `TEMPLATE.env` into
your local `.env` file and edit it, as desired.

```bash
cp TEMPLATE.env .env
nano .env
```

### Running

Use this command to run this project in dev mode. 

```bash
npm run watch
```

## Production Usage

To use this project in production, you should use the `build` command
to compile your code to ES5.

```bash
npm run build
```

After building, use the `start` command to run the project.

```bash
npm run start
```

## Testing

Unit tests and linting can be run using `npm`.

```
npm run build
npm run test
npm run lint
```


[expressjs]: https://expressjs.com/
[eslint]: https://eslint.org/
[docker-compose]: https://docs.docker.com/compose/
[localhost]: http://localhost:3000/
[nodejs]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/
[mongodb]: https://www.mongodb.com/

