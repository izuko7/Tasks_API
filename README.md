<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ bun install
```

## Compile and run the project

```bash
# development
$ bun run start

# watch mode
$ bun run start:dev

# production mode
$ bun run start:prod
```

## Run tests

```bash
# unit tests
$ bun run test

# e2e tests
$ bun run test:e2e

# test coverage
$ bun run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ bun install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Observability

In production applications, observability is essential for understanding how your system behaves, detecting issues early, and maintaining reliable performance.

[NestJS Observe](https://observe.nestjs.com) automatically instruments your NestJS application, giving you deep visibility into your system with minimal setup:

- **Distributed tracing:** Follow requests across services and understand how they flow through your system.
- **Waterfall analysis:** Visualize request execution and identify slow operations, bottlenecks, and unexpected delays.
- **Performance analysis:** Analyze application performance in real time and quickly pinpoint areas that need optimization.
- **Metrics:** Track key application and infrastructure metrics to understand system health and performance trends.
- **Logging:** Centralize and correlate logs with traces and other telemetry to make debugging easier.
- **Error tracking:** Detect errors quickly and investigate their root causes with the surrounding context.
- **SLA monitoring:** Track service-level objectives and identify when your application is approaching or exceeding defined thresholds.
- **Alarms and alerts:** Set up alerts for critical errors, performance degradation, SLA violations, and other anomalies so your team can react quickly.

This project is already instrumented. Create a free account at [observe.nestjs.com](https://observe.nestjs.com), add an application, and paste the generated app key and secret into the `ObserveModule.forRoot()` call in `src/app.module.ts`.

The free plan needs no payment details and covers 300,000 events a month. You can also browse the [live demo](https://www.observe-demo.nestjs.com/dashboard) first - the whole dashboard over a busy service's data, with nothing to install.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Auto-instrument your application with [NestJS Observe](https://observe.nestjs.com). Distributed tracing, metrics, and logging made easy. Error tracking and performance monitoring for your NestJS applications.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).


# Tasks API

API REST de gestion de tâches avec authentification, construite avec NestJS, Prisma et Better Auth.

## Stack

- Runtime / package manager : Bun
- Framework : NestJS
- Base de données : PostgreSQL
- ORM : Prisma
- Authentification : Better Auth (email/password + plugin `bearer`)
- Validation : Zod (`nestjs-zod`)
- Documentation API : Swagger
- Tests manuels : Bruno

## Prérequis

- Bun
- PostgreSQL en local (ou accessible)
- Un client Bruno (facultatif, pour rejouer la collection de tests)

## Installation

\`\`\`bash
bun install
\`\`\`

## Configuration

Créer un fichier `.env` à la racine :

\`\`\`env
DATABASE_URL="postgresql://user:password@localhost:5432/nom_de_la_base?schema=public"
BETTER_AUTH_SECRET="<généré avec: openssl rand -base64 32>"
BETTER_AUTH_URL="http://localhost:3000"
PORT=3000
\`\`\`

Créer la base de données manuellement (ex. via PgAdmin) avant de continuer.

## Base de données

\`\`\`bash
bunx prisma generate
bunx prisma migrate dev
\`\`\`

## Lancement

\`\`\`bash
bun run start:dev
\`\`\`

Le serveur démarre sur `http://localhost:3000`.

## Documentation API (Swagger)

Une fois le serveur lancé : `http://localhost:3000/docs`

Pour tester une route protégée depuis Swagger :
1. Récupérer un token via `POST /api/auth/sign-in/email`
2. Cliquer sur "Authorize" en haut de la page
3. Coller le token (sans le mot "Bearer")

## Authentification

Toutes les routes `/tasks` sont protégées. Il faut d'abord créer un compte et se connecter pour obtenir un token.

### Inscription
\`\`\`
POST /api/auth/sign-up/email
Content-Type: application/json

{
  "name": "...",
  "email": "...",
  "password": "..."
}
\`\`\`

### Connexion
\`\`\`
POST /api/auth/sign-in/email
Content-Type: application/json

{
  "email": "...",
  "password": "..."
}
\`\`\`

La réponse contient un `token`, à utiliser ensuite dans le header :
\`\`\`
Authorization: Bearer <token>
\`\`\`

## Routes disponibles

| Méthode | Route | Description |
|---|---|---|
| POST | /tasks | Créer une tâche |
| GET | /tasks | Lister ses tâches (filtres `completed`, `priority`) |
| GET | /tasks/:id | Récupérer une tâche |
| PATCH | /tasks/:id | Modifier une tâche |
| PATCH | /tasks/:id/complete | Marquer une tâche comme terminée |
| DELETE | /tasks/:id | Supprimer une tâche |

Chaque route est restreinte aux tâches appartenant à l'utilisateur authentifié (isolation par `userId`).

## Sécurité

- Guard global (Better Auth) : bloque toute requête sans session/token valide.
- Guard applicatif (`SessionGuard`) : vérification explicite de la présence de l'utilisateur avant d'entrer dans le controller.
- Chaque requête sur une tâche vérifie que celle-ci appartient bien à l'utilisateur connecté (404 sinon, jamais 403, pour ne pas révéler l'existence de la ressource).

## Tests manuels (Bruno)

Une collection Bruno est fournie dans `./bruno` *(adapter le chemin réel)*.

Ordre d'exécution recommandé :
1. `Auth/Register`
2. `Auth/Login`
3. `Tasks/Create`
4. `Tasks/Find All`
5. `Tasks/Find One`
6. `Tasks/Update`
7. `Tasks/Complete`
8. `Tasks/Remove`
9. Scénario sécurité : créer un second compte et vérifier qu'il ne peut pas accéder aux tâches du premier (404 attendu).

## Structure du projet

\`\`\`
src/
├── auth/
│   ├── auth.module.ts
│   └── auth.cli.ts
├── common/
│   └── guards/
│       └── session.guard.ts
├── modules/
│   └── tasks/
│       ├── dto/
│       ├── tasks.controller.ts
│       ├── tasks.service.ts
│       └── tasks.module.ts
├── prisma/
├── app.module.ts
└── main.ts
\`\`\`

## Ce qui reste à faire

- [ ] Pagination sur `GET /tasks` *(bonus)*
- [ ] Recherche textuelle sur les tâches *(bonus)*
