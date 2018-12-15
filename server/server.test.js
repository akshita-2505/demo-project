const request = require('supertest'); 

var app = require('./server').app;

it('hello',(done) =>
  {
    request(app) 
    .get('/')
    .expect({error:'page not found'})
         .expect(404 )
    
         .end(done);
}); 