// 
// Tue 08 Sep 2020 10:19:28 AM UTC
// 
// Unitest for app 
// required by ci line 
const supertest = require('supertest');
const server = require('./index');
const chai = require('chai');

chai.should();

const api = supertest.agent(server);

describe('Add method', () => {
  it('should connect to the Server', (done) => {
    api.post('/api/add')
      .set('Connetion', 'keep alive')
      .set('Content-Type', 'application/json')
      .type('form')
      .send({
        firstNumber: 2,
        secondNumber: 3
      })
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.result.should.equal(5);
        done();
      });
  });
})
