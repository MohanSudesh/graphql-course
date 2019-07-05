const comments = [{
  id: "1",
  text: "Comment 1",
  author: "1",
  post: "1"
}, {
  id: "2",
  text: "Comment 2",
  author: "2",
  post: "2"
}, {
  id: "3",
  text: "Comment 2",
  author: "3",
  post: "4"
}];

// Demo User Data
const users = [{
  id: '1',
  name: "Eder",
  eder: "eder@example.com",
  age: 31
}, {
  id: '2',
  name: "Sarah",
  eder: "sarah@example.com"
}, {
  id: '3',
  name: "Mike",
  eder: "mike@example.com"
}];

// Demo Posts Data
const posts = [{
  id: "1",
  title: "Titulo 1",
  body: "Post Perrón",
  published: true,
  author: "1"
}, {
  id: "2",
  title: "Titulo 2",
  body: "Otro Perrón",
  published: true,
  author: "2"
}, {
  id: "3",
  title: "Titulo 3",
  body: "Sin comentarios",
  published: false,
  author: "3"
}, {
  id: "4",
  title: "Titulo 4",
  body: "Sin comentarios",
  published: false,
  author: "1"
}];

const db = {
  users,
  posts,
  comments
}

export { db as default };