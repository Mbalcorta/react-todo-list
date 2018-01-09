const db = require('./db')

const createTask = (task) => {
  return db.query('INSERT INTO tasks(task) VALUES($1) RETURNING *', [task])
    .then(console.log)
    .catch(console.error)
}

const updateTask = (id, complete) => {
  return db.one('UPDATE tasks SET complete=$2 WHERE id=$1 RETURNING *', [id, complete])
    .then(console.log)
    .catch(console.error)
}

const editTask = (id, task) => {
  return db.one('UPDATE tasks SET task=$2 WHERE id=$1 RETURNING *', [id, task])
    .then(console.log)
    .catch(console.error)
}

const deleteTask = (id) => {
  return db.oneOrNone('DELETE FROM tasks WHERE id=$1 RETURNING *', id)
    .then(console.log)
    .catch(console.error)
}

module.exports = { createTask, updateTask, editTask, deleteTask }