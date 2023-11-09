# Dockerized Node.js App

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nawodyaishan/docker-nodejs/blob/main/LICENSE)

## Overview

This repository contains a simple Node.js application Dockerized for easy deployment. It uses Express for the web server
and is set up with Docker and Docker Compose for containerization.

## File Structure

```
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── package.json
├── src
│   └── index.ts
├── tsconfig.json
└── yarn.lock
```

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/nawodyaishan/docker-nodejs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd docker-nodejs
   ```

3. Build and run the Docker containers:

   ```bash
   docker-compose up
   ```

   The app will be accessible at [http://localhost:8080](http://localhost:8080).

## Scripts

- **start**: Run the application using `ts-node`.
- **build**: Compile TypeScript code to JavaScript.
- **serve**: Run the compiled application.

## Dockerfile

```Dockerfile
FROM node:14

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["yarn", "start"]
```

## Docker Compose

```yaml
version: '3'
services:
   web:
      build: .
      ports:
         - "8080:8080"
   db:
      image: 'mysql'
      environment:
         MYSQL_ROOT_PASSWORD: password
      volumes:
         - 'db-data:/foo'

volumes:
   db-data:
```

## Application Code (index.ts)

```typescript
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
   res.json({message: 'Yeah! Docker baby 🐳'});
});

app.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${PORT}`);
});
```

## Author

- [Nawodya Ishan](https://github.com/nawodyaishan)
- Email: nawodyain@gmail.com

