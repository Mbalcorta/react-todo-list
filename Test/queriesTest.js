const expect = require('chai').expect;
const tasks = require('../Models/tasks')
const { resetDB } = require('./utilities/dbUtilities')

describe('createTask', function() {
  beforeEach('reset the database', resetDB)
  it('should update the task to walk the dog', function() {
    return tasks.create('walk the dog')
      .then(results => {
        expect(results.task).to.equal('walk the dog')
    })
  })
  it('should label complete status of task as false', function() {
   return tasks.create('walk the dog')
     .then(results => {
        expect(results.complete).to.equal('false')
    })
  })
  it('should add one task', function() {
    return tasks.create('walk the dog')
      .then(results => {
        expect(results.id).to.equal(1)
    })
  })
})

describe('updateTask', function() {
  beforeEach('reset the database', resetDB)
  it('should update the task to walk the dog', function() {
    return tasks.create('walk the dog')
      .then(results => {
        expect(results.task).to.equal('walk the dog')
    })
  })
  it('should label complete status of task as false', function() {
   return tasks.create('walk the dog')
     .then(results => {
        expect(results.complete).to.equal('false')
    })
  })
  it('should add one task', function() {
    return tasks.create('walk the dog')
      .then(results => {
        expect(results.id).to.equal(1)
    })
  })
})