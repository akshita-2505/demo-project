const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app')

var db = {
  saveUser : expect.createSpy()  
};
app.__set__('db',db); 

it('spy correct',()=>
  {
    var spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
})

it('a',() =>
  {
    var email = 'abc@gmail.com';
    var password = '123abc';
    
    app.handleSignup(email,password);
    
    expect(db.saveUser).toHaveBeenCalledWith({email,password})
    
})