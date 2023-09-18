# Star Wars API

A Star Wars character API to showcases DTO operations using Typescript against the Star Wars public api: https://swapi.dev/


This service uses

- nodejs
- typescript
- express-server
- swagger
- jest test-runner



## Quick Start

Run the following commands to get started:

```bash
npm intall
npm run start
```

Your api will be available on http://localhost:3000/

## Consuming the API

You can view the swagger of the available api documentation on http://localhost:3000/api-docs


Once you have your project running you can perform the following rest calls:

```
GET         /people/{id}

example:    http://localhost:3000/people/1
handler:    src/controllers/getPersonById.ts
```

```
GET         /people

example:    http://localhost:3000/people
handler:    src/controllers/getPersonList.ts
```

```
GET         /people?name={query}

example:    http://localhost:3000/people?name=luke
handler:    src/controllers/searchPersonByName.ts
```



## Additional commands

### Run in developer mode

```bash
npm run dev
```

### Run linter
```bash
npm run lint
```

### Run unit tests
```bash
npm run test
```

### Build a production version
```bash
npm run build
```

