# Node.js Assignment Solutions

## Setup
For Q1–Q3 (pure Node.js, no extra packages needed) just run directly:
```
node q1_eventEmitter.js
node q2_fileHandling.js
node q3_httpServer.js
```

For Q4 and Q5 (use Express), first install express in this folder:
```
npm init -y
npm install express
node q4_todoRoutes.js
node q5_bakeryApp.js
```

## Q1 — EventEmitter & Event Loop
`q1_eventEmitter.js` — Creates a `classStart`/`classEnd` event-based school bell,
plus a `setTimeout`, `setImmediate`, and `process.nextTick` demo with an
explanation comment at the bottom of the file about execution order.

## Q2 — File Handling using fs module
`q2_fileHandling.js` — Maintains `attendance.txt` with add / show all /
update / delete functions for student names, using synchronous `fs` methods.
Running the file creates `attendance.txt` in the same folder and demonstrates
each operation.

## Q3 — HTTP Server
`q3_httpServer.js` — Plain `http` module server for a tea stall; visiting
`http://localhost:3000/` shows "Welcome to NodeJS!" with status code 200.

## Q4 — GET, POST, PUT, DELETE routes
`q4_todoRoutes.js` — Express routes for a to-do list stored in an in-memory
array (no database):
- `GET /tasks` — list all tasks
- `POST /tasks` — add a task (JSON body: `{ "title": "..." }`)
- `PUT /tasks/:id` — mark a task completed
- `DELETE /tasks/:id` — remove a task

## Q5 — Express.js with HTML pages
`q5_bakeryApp.js` — Express site for a bakery with three routes:
- `/` — bakery name & welcome message
- `/menu` — list of cakes/pastries
- `/contact` — phone number & address
