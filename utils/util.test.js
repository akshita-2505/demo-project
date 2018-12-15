const utils = require('./utils');
const expect = require('expect');

describe('utils',() =>{

it('it should add two numbers:',() =>
  {
   var res = utils.add(33,11);
    expect(res).toBe(44).toBeA('number');
    
    if(res!==44)
        {
            throw Error(`My expectes op is 44 but it was ${res}`);
        }
});
it('async Add', (done)=>
   {
    utils.asyncAdd(4,3,(sum) =>
                 {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('it should multiply of two numbers:',() =>
  {
   var res = utils.mul(4);

    
    expect(res).toBe(16).toBeA('number');
    
    //    if(res!==16)
//        {
//            throw Error(`My expectes op is 16 but it was ${res}`);
//        }
});
    
    
})

//it('setname' ,() =>
//  {
//    var user = {}

//})

//it('notbe' ,() =>
//  {
////    expect({name:"Axita"}).toEqual({name:"Axita"});
////    expect([2,3,5]).toExclude(1);
//    
//})

