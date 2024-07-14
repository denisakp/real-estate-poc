Real estate PoC project

## Description
This project is a PoC for a real estate company. It is a simple web application that allows users to view properties, add new properties, and delete properties.
The project is built using Node.js and NestJS framework. The database used is MongoDB.

## Installation

```bash
$ make start
```

## Running the app

```bash
# development
$ npm run start:dev

# Docker environment
$ make compose-up
```

## Project structure
```txt
├── .env.local
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── docker-compose.yml
├── Dockerfile
├── libs
│   ├── config
│   │   ├── src
│   │   │   ├── config.module.ts
│   │   │   ├── config.service.spec.ts
│   │   │   ├── config.service.ts
│   │   │   └── index.ts
│   │   └── tsconfig.lib.json
│   ├── database
│   │   ├── src
│   │   │   ├── abstracts
│   │   │   │   ├── abstract.repository.ts
│   │   │   │   ├── abstract.schema.ts
│   │   │   │   └── index.ts
│   │   │   ├── database.module.ts
│   │   │   ├── database.service.spec.ts
│   │   │   ├── database.service.ts
│   │   │   └── index.ts
│   │   └── tsconfig.lib.json
│   ├── scraping
│   │   ├── src
│   │   │   ├── index.ts
│   │   │   ├── scraping.context.ts
│   │   │   ├── scraping.module.ts
│   │   │   ├── scraping.service.spec.ts
│   │   │   ├── scraping.service.ts
│   │   │   └── strategies
│   │   │       ├── property-finder.strategy.ts
│   │   │       └── strategy.interface.ts
│   │   └── tsconfig.lib.json
│   └── storage
│       ├── src
│       │   ├── index.ts
│       │   ├── storage.module.ts
│       │   ├── storage.service.spec.ts
│       │   └── storage.service.ts
│       └── tsconfig.lib.json
├── makefile
├── nest-cli.json
├── package-lock.json
├── package.json
├── README.md
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── auth
│   │   ├── auth.controller.spec.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.spec.ts
│   │   └── auth.service.ts
│   ├── blogs
│   │   ├── blog.repository.ts
│   │   ├── blogs.controller.spec.ts
│   │   ├── blogs.controller.ts
│   │   ├── blogs.module.ts
│   │   ├── blogs.service.spec.ts
│   │   ├── blogs.service.ts
│   │   ├── dto
│   │   │   ├── create-blog.dto.ts
│   │   │   └── update-blog.dto.ts
│   │   └── schemas
│   │       └── blog.schema.ts
│   ├── estates
│   │   ├── dto
│   │   │   ├── create-estate.dto.ts
│   │   │   └── update-estate.dto.ts
│   │   ├── estate.repository.ts
│   │   ├── estates.controller.spec.ts
│   │   ├── estates.controller.ts
│   │   ├── estates.module.ts
│   │   ├── estates.service.spec.ts
│   │   ├── estates.service.ts
│   │   └── schemas
│   │       └── estate.schema.ts
│   ├── main.ts
│   └── users
│       ├── users.module.ts
│       └── users.service.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tree.py
├── tsconfig.build.json
└── tsconfig.json
```
